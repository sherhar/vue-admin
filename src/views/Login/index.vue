<template>
  <div id="login">
      <div class="login-wrap">
          <ul class="menu-tab">
              <li v-for="item in menuTab" :key="item.id" :class="{'current' :item.current}" @click="toggleMenu(item)"> {{ item.txt }} </li>
          </ul>
          <!-- 表单 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
                <el-form-item prop="username" class="item-form">
                    <label >邮箱</label>
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="password" class="item-form">
                    <label >密码</label>
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" class="item-form"></el-input>
                </el-form-item>
                <el-form-item  prop="code" class="item-form">
                    <label >验证码</label>
                    <el-row :gutter="11">
                      <el-col :span="16">
                        <el-input v-model.number="ruleForm.code"></el-input>
                      </el-col>
                      <el-col :span="8">
                        <el-button type="success" class="block">获取验证码</el-button>  
                      </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
                </el-form-item>
            </el-form>
      </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data(){
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback(); //true
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        menuTab: [
            { txt: '登录', current: true},
            { txt: '注册', current: false}
            ],
        isActive: true,
        ruleForm: {
          username: '',
          password: '',
          code: ''
        },
        rules: {
        username: [
            { validator: validatePass, trigger: 'blur' }
        ],
        password: [
            { validator: validatePass2, trigger: 'blur' }
        ],
        code: [
            { validator: checkAge, trigger: 'blur' }
        ]
        }
      }
  },
  created(){},
  mouted(){},
  methods: {
      toggleMenu(data){
          this.menuTab.forEach(elem => {
              elem.current = false
          });

          data.current = true
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  }
};
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
    width: 330px;
    margin: auto;
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }
}

.current {
    background-color: rgba(0,0,0,.1);
}

.login-form{
    margin-top: 29px;
    label {
        text-align: left;
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color:#fff;
    }
    .item-form {
        margin-bottom: 13px;
    }
    .block{
      width:100%;
      display: block;
    }
    .login-btn{
      margin-top: 19px;
    }
}


</style>
