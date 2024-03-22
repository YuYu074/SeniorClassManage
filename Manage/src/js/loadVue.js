window.onload = () => {
  new Vue({
    el: '#box',
    data() {
      return {
        url: 'http://127.0.0.1:3000/',
        direction: 'Web前端方向',
        description: '学长课堂管理页面，在此查看学生信息以及作业得分情况和出勤情况',
        thList: ['学号', '班级', '姓名', '作业成绩', '缺勤次数', '操作'],
        moreOptList: ['设为精英训练营成员', '取消设为精英训练营成员', '删除成员'],
        majorList: ['计科', '网络', '大数据', '软件', '物联'],
        conditionList: ['未交作业', '缺勤'],
        input: '',
        studentList: [],
        searchList: [],
        searching: false,
        showTopBtn: false,
        isMenber: './img/member.svg',
        grade: ['./img/S.svg', './img/A.svg', './img/B.svg', './img/C.svg', './img/D.svg'],
        editMode: false,
        tempStudent: {},
        optRes: '',
        toast: false
      }
    },
    methods: {
      judgeShow() {
        this.showTopBtn = (document.documentElement.scrollTop || document.body.scrollTop) > 500
      },
      search() {
        const value = this.input
        if (!value) return
        this.searching = true
        this.searchList = []
        this.input = ''
        for (v of this.studentList) {
          if (v.regNum.includes(value) || v.name.includes(value)) {
            this.searchList.push(v)
          }
        }
      },
      searchByMajor(i) {
        this.searching = true
        this.searchList = []
        for (v of this.studentList) {
          if (v.major.includes(this.majorList[i])) {
            this.searchList.push(v)
          }
        }
      },
      searchByCondition(i) {
        this.searching = true
        this.searchList = this.studentList.filter(student => {
          return i ? student.absence > 0 : /[^\d]0|^0/.test(student.homeworkScore.join(','))
        })
      },
      all() {
        this.searching = false
      },
      getGradeLevel(score) {
        switch (true) {
          case score >= 90:
            return this.grade[0]
          case score >= 80:
            return this.grade[1]
          case score >= 70:
            return this.grade[2]
          case score >= 60:
            return this.grade[3]
          default:
            return this.grade[4]
        }
      },
      view(index, name) {
        window.open(this.url + 'views/homework/' + (index + 1) + '/' + name + '.html')
      },
      opt(student) {
        this.savePos()
        this.editMode = true
        this.tempStudent = { ...student }
      },
      moreOpt(index) {
        index -= 0
        switch (index) {
          case 0:
            this.tempStudent.isEliteMenber = 1
            break
          case 1:
            this.tempStudent.isEliteMenber = 0
            break
          case 2:
            const { regNum, name, major } = this.tempStudent
            if (window.confirm('确认删除该成员？\n姓名：' + name + '\n班级：' + major)) {
              this.deleteStudent(regNum)
            }
          default:
            break;
        }
      },
      unOpt() {
        this.tempStudent = {}
        this.editMode = false
        setTimeout(() => {
          this.scrollPos()
        }, 50);
      },
      submitForm(student) {
        let { regNum, homeworkScore, finalDesignScore, absence, isEliteMenber } = student
        homeworkScore = typeof homeworkScore == 'string' ? homeworkScore.split(',').join('/') : homeworkScore.join('/')
        const data = { regNum, homeworkScore, finalDesignScore, absence, isEliteMenber }
        ajaxPromise(this.url + 'student/update', 'POST', data)
          .then(res => {
            this.toast = true
            this.optRes = res.msg
            setTimeout(() => {
              this.toast = false
              window.location.reload()
            }, 1000)
          }, err => {
            this.toast = true
            this.optRes = '操作失败，请重试！'
            setTimeout(() => {
              this.toast = false
              window.location.reload()
            }, 1000)
          })
      },
      deleteStudent(regNum) {
        ajaxPromise(this.url + 'student/delete?regNum=' + regNum)
          .then(res => {
            this.toast = true
            this.optRes = res.msg
            setTimeout(() => {
              this.toast = false
              window.location.reload()
            }, 1000)
          }, err => {
            this.toast = true
            this.optRes = '操作失败，请重试！'
            setTimeout(() => {
              this.toast = false
              window.location.reload()
            }, 1000)
          })
      },
      savePos() {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop
        localStorage.setItem('scrollTop', scrollPos)
      },
      scrollPos() {
        var distance = localStorage.getItem('scrollTop')
        if (distance) {
          document.documentElement.scrollTop = parseInt(distance)
          document.body.scrollTop = parseInt(distance)
        }
      }
    },
    mounted() {
      ajaxPromise(this.url)
        .then(res => {
          for (const v of res) {
            const score = v.homeworkScore
            score && (v.homeworkScore = score.toString().split('/'))
          }
          this.studentList = res
        })
        .catch(err => console.log(err))
      setTimeout(() => {
        this.scrollPos()
      }, 50)
      window.onscroll = this.judgeShow
    },
  })
}
