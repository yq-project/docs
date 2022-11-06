export default [
  {//非jaccount账号登陆
    type: "post",
    url: "/api/login/account",
    response: (params) => {
      let username=params.username;
      let password=params.password;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "登陆成功",
            userId:10,
            role:"admin",     //admin、user、leader
            username:"A同学",  //真实姓名
            department:"网宣办", //admin和user为网宣办团队，principal为二级单位具体名称
            read:true
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//登出
    type: "get",
    url: "/api/logout",
    response: (params) => {
      if (true) {
        return {
          status: 200,
          data: {
            msg: "登出成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//检查在线状态
    type: "get",
    url: "/api/me",
    response: (params) => {
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
            userId:10,
            role:"admin",
            username:"A同学",
            department:"网宣办",
            read:true
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 发布公告
    type: "post",
    url: "/api/broadcast",
    response: (params) => {
      let title=params.title
      let content=params.content
      if (true) {
        return {
          status: 200,
          data: {
            msg: "发布成功"
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 修改公告
    type: "put",
    url: "/api/broadcast",
    response: (params) => {
      let broadcastId=params.broadcastId
      let title=params.title
      let content=params.content
      if (true) {
        return {
          status: 200,
          data: {
            msg: "修改成功"
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 删除公告
    type: "delete",
    url: "/api/broadcast",
    response: (params) => {
      let broadcastId=params.broadcastId
      if (true) {
        return {
          status: 200,
          data: {
            msg: "删除成功"
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//查看公告
    type: "get",
    url: "/api/broadcast",
    response: (params) => {
      let broadcastId=params.broadcastId
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
            title:"值班同学注意事项",
            content:"到岗前和离岗前请及时签到签退",
            createdAt:"",
            modifiedAt:"",
            creator:"管理员B",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//获取最新公告
    type: "get",
    url: "/api/broadcast/latest",
    response: (params) => {
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
            broadcastId:1,
            title:"值班同学注意事项",
            content:"到岗前和离岗前请及时签到签退",
            createdAt:"",
            modifiedAt:"",
            creator:"管理员B",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//已读公告
    type: "post",
    url: "/api/readbroadcast",
    response: (params) => {
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//获取公告列表
    type: "post",
    url: "/api/broadcastlist",
    response: (params) => {
      let pageIndex=params.pageIndex
      let pageNum=params.pageNum
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
            total:402,
            broadcasts:[{
              broadcastId:1,
              title:"值班同学注意事项",
              content:"到岗前和离岗前请及时签到签退",
              createdAt:"",
              modifiedAt:"",
              creator:"管理员B",
            }]
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
    
  },
  {//创建账户
    type: "post",
    url: "/api/account",
    response: (params) => {
      let username=params.username
      let department=params.department
      let role=params.role
      if (true) {
        return {
          status: 200,
          data: {
            msg: "创建成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
    
  },
  {//修改账户
    type: "put",
    url: "/api/account",
    response: (params) => {
      let userId=params.userId
      let username=params.username
      let department=params.department
      let role=params.role
      if (true) {
        return {
          status: 200,
          data: {
            msg: "修改成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
    
  },
  {//删除账户
    type: "delete",
    url: "/api/account",
    response: (params) => {
      let userId=params.userId
      if (true) {
        return {
          status: 200,
          data: {
            msg: "删除成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//获取账户列表
    type: "get",
    url: "/api/accountlist",
    response: (params) => {
      let userId=params.userId
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
            userList:[{
              userId:1,
              username:"同学A",
              department:"网宣办团队",
              role:"user",
            },{

            }],
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//csv批量导入账户
    type: "post",
    url: "/api/importaccount",
    response: () => {
      let file //csv文件
      if (true) {
        return {
          status: 200,
          data: {
            msg: "导入成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//统计舆情种类
    type: "post",
    url: "/api/statistics/category",
    response: (params) => {
      let startTime=params.startTime
      let endTime=params.endTime
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
            data:{
              msg:"",
              stats:{
                "教学":122,
                "食堂":12,
                "疫情":44
              }
            }
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//统计舆情单位
    type: "post",
    url: "/api/statistics/department",
    response: (params) => {
      let startTime=params.startTime
      let endTime=params.endTime
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
            stats:{
              "电院":122,
              "后勤":12,
              "机动":44,
              "保卫处":233
            }
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//统计签到情况
    type: "post",
    url: "/api/statistics/sign",
    response: (params) => {
      let startTime=params.startTime
      let endTime=params.endTime
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
            stats:{
              "同学A":7,
              "同学B":3,
              "同学C":4,
            }
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//统计舆情上报质量总分
    type: "post",
    url: "/api/statistics/score",
    response: (params) => {
      let startTime=params.startTime
      let endTime=params.endTime
      if (true) {
        return {
          status: 200,
          data: {
            msg: "",
            data:{
              msg:"",
              stats:{
                "同学A":55,
                "同学B":33,
                "同学C":44,
              }
            }
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//user上传舆情
    type: "post",
    url: "/api/info",
    response: (params) => {
      let theme = params.theme;
      let content = params.content;
      let department = params.department;
      let infoUrl = params.infoUrl;
      let pictureUrl = params.pictureUrl;
      let infoType = params.infoType;
      let tip = params.tip;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "上传成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//修改舆情
    type: "put",
    url: "/api/info",
    response: (params) => {
      let id = params.id;
      let theme = params.theme;
      let content = params.content;
      let department = params.department;
      let infoUrl = params.infoUrl;
      let pictureUrl = params.pictureUrl;
      let infoType = params.infoType;
      let tip = params.tip;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "修改成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//获取舆情详情
    type: "get",
    url: "/api/info/1", //id=1
    response: () => {
      let role = "user";
      if (true) {
        return {
          status: 200,
          data: {
            msg: "获取成功",
            theme: "食堂有老鼠",
            content: "网友反映食堂有老鼠",
            department: "后勤处",
            infoUrl: "https://shuiyuan.edu.cn",
            time:{
                createdAt:"",
                modifiededAt:"",
                //...其他时间
            },
            pictureUrl: "",
            infoType: "生活",
            tip: "有100多楼的讨论量",
            state: "待审核", //1待审核 2待修改 3审核通过 4admin中止流程 5user中止流程
            creator: "同学A",
            feedback: "good"
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//user 撤回舆情
    type: "delete",
    url: "/api/info",
    response: (params) => {
      let infoId = params.infoId;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "删除成功",
          },
        };
      } else {
        return {
          status: 200,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//获取舆情list  后端判断admin和user，admin可以获取全部，user只能获取自己的
    type: "get",
    url: "/api/infoList", 
    response: (params) => {
      let pageIndex=params.pageIndex
      let pageNum=params.pageNum
      if (true) {
        return {
          status: 200,
          data: {
            msg: "获取成功",
            total:402,
            list: [
            { 
              infoId: 1,
              theme: "食堂有老鼠",
              content: "网友反映食堂有老鼠",
              department: "后勤处",
              infoUrl: "https://shuiyuan.edu.cn",
              time:{
                createdAt:"",
                modifiededAt:"",
                //...其他时间
              },
              pictureUrl: "",
              infoType: "生活",
              tip: "有100多楼的讨论量",
              state: "待审核", //1待审核 2待修改 3审核通过 4admin中止流程 5user中止流程
              userId: 1,
              feedback: "good"
            }],
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//获取全部comment task list 后端判断admin和user，admin可以获取全部，user只能获取自己的
    type: "get",
    url: "/api/commentTaskList", 
    response: (params) => {
      let pageIndex=params.pageIndex
      let pageNum=params.pageNum
      if (true) {
        return {
          status: 200,
          data: {
            msg: "获取成功",
            total:402,
            list: [
              {
                infoId: 1,
                userIdList:[1,2,3],
                score: "A",
                feedback: "good",
                time:{
                    createdAt:"",
                    modifiededAt:"",
                    //...其他时间
                },
                state: "未读" //1未读 2未反馈 3审核中 4审核通过
              }

            ],
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//user 获取待办list
    type: "get",
    url: "/api/commentTaskList", 
    response: (params) => {
      if (true) {
        return {
          status: 200,
          data: {
            msg: "获取成功",
            commentTaskList: [
              {
                infoId: 1,
                userIdList:[1,2,3],
                score: "A",
                feedback: "good",
                time:{
                    createdAt:"",
                    modifiededAt:"",
                    //...其他时间
                },
                state: "未读" //1未读 2未反馈 3审核中 4审核通过
              }
            ],
            modifyTaskList:[
              { 
                infoId: 1,
                theme: "食堂有老鼠",
                content: "网友反映食堂有老鼠",
                department: "后勤处",
                infoUrl: "https://shuiyuan.edu.cn",
                time:{
                  createdAt:"",
                  modifiededAt:"",
                  //...其他时间
                },
                pictureUrl: "",
                infoType: "生活",
                tip: "有100多楼的讨论量",
                state: "待审核", //1待审核 2待修改 3审核通过 4admin中止流程 5user中止流程
                feedback: "good"
              }],
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 获取process task list 
    type: "get",
    url: "/api/processTaskList", 
    response: () => {
      if (true) {
        return {
          status: 200,
          data: {
            msg: "获取成功",
            list: [
              {
                infoId: 1,
                score: "A",
                feedback: "good",
                time:{
                    createdAt:"",
                    modifiededAt:"",
                    //...其他时间
                },
                state: "未读" //1未读 2未反馈 3审核中 4审核通过
              }
            ],
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 修改评分
    type: "put",
    url: "/api/infoScore",
    response: (params) => {
      let infoId = params.infoId;
      let userId = params.userId;
      let score = params.score;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "修改成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 老师审核通过 上传任务
    type: "post",
    url: "/api/passInfo",
    response: (params) => {
      let infoId = params.infoId;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 老师终止流程
    type: "post",
    url: "/api/closeInfo",
    response: (params) => {
      let infoId = params.infoId;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//user 助管撤回舆情
    type: "post",
    url: "/api/cancelInfo",
    response: (params) => {
      let infoId = params.infoId;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 老师提出修改意见
    type: "post",
    url: "/api/modifyAdvise",
    response: (params) => {
      let infoId = params.infoId;
      let advise = params.advise;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//leader 舆情已读
    type: "post",
    url: "/api/readInfo",
    response: (params) => {
      let infoId = params.infoId;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//leader 提交反馈
    type: "post",
    url: "/api/processTask/updateFeedback",
    response: (params) => {
      let infoId = params.infoId;
      let feedback = params.feedback;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 老师对二级领导提出反馈意见
    type: "post",
    url: "/api/processTask/feedbackAdvise",
    response: (params) => {
      let infoId = params.infoId;
      let advise = params.advise;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 老师审核通过 通知二级领导任务
    type: "post",
    url: "/api/processTask/pass",
    response: (params) => {
      let infoId = params.infoId;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 老师分配舆情引导任务
    type: "post",
    url: "/api/commentTask",
    response: (params) => {
      let infoId = params.infoId;
      let userList = params.userList;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//user 舆情引导任务提交反馈
    type: "post",
    url: "/api/commentTask/updateFeedback",
    response: (params) => {
      let infoId = params.infoId;
      let feedback = params.feedback;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 老师对引导反馈提出反馈意见
    type: "post",
    url: "/api/commentTask/feedbackAdvise",
    response: (params) => {
      let infoId = params.infoId;
      let advise = params.advise;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
  {//admin 老师审核通过 舆情引导任务
    type: "post",
    url: "/api/commentTask/pass",
    response: (params) => {
      let infoId = params.infoId;
      if (true) {
        return {
          status: 200,
          data: {
            msg: "状态更新成功",
          },
        };
      } else {
        return {
          status: 400,
          data: {
            msg: "detailed reason",
          },
        };
      }
    },
  },
];
