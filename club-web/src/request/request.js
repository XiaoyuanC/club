import axios from 'axios'
export function request(config) {
  // 1.Create an instance of axios
  const instance = axios.create({
    timeout: 60000
  })

  // 2.axios interceptor
  // 2.1.The role of request interception
  instance.interceptors.request.use(config => {
    //Modify intercept configuration
    //Add token information
    config.headers.token = localStorage.getItem('token');
    return config
  }, err => {
    this.$message.error({
      message: "Invalid operation",
      duration: 3000, // Continue to display message
    });
  })

  // 2.2.Response interception
  instance.interceptors.response.use(res => {
    if (res.data.code === "403") {
      this.$message.error(res.data.msg);
      //Close waiting
      this.$loading().close();
      //Login page
      this.$router.replace('/login');
      //Jump to the login interface
      return;
    }
    return res.data
  }, err => {
    this.$message.error({
      message: "Invalid operation",
      duration: 3000, // Continue to display message
    });
  })

  // 3.Send real network requests
  return instance(config)
}



export function post(config) {
  const instance = axios.create({
    timeout: 60000
  })

  
  instance.interceptors.request.use(config => {
    config.method = "POST";
    config.headers.token = localStorage.getItem('token');
    return config
  }, err => {
    this.$message.error({
      message: "Invalid operation",
      duration: 3000, 
    });
  })

  instance.interceptors.response.use(res => {
    if (res.data.code === "403") {
      this.$message.error(res.data.msg);
      this.$loading().close();
      this.$router.replace('/login');
      return;
    }
    return res.data
  }, err => {
    this.$message.error({
      message: "Invalid operation",
      duration: 3000, 
    });
  })

  return instance(config)
}

export function get(config) {
  const instance = axios.create({
    timeout: 60000
  })
  instance.interceptors.request.use(config => {
    
    config.method = "GET";
    config.headers.token = localStorage.getItem('token');
    return config
  }, err => {
    this.$message.error({
      message: "Invalid operation",
      duration: 3000, 
    });
  })
  instance.interceptors.response.use(res => {
    if (res.data.code === "403") {
      this.$message.error(res.data.msg);
      this.$loading().close();
      this.$router.replace('/login');
      return;
    }
    return res.data
  }, err => {
    this.$message.error({
      message: "Invalid operation",
      duration: 3000, 
    });
  })
  return instance(config)
}
