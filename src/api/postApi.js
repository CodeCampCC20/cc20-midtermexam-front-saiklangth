import axios from "axios";

const postApi = {}

const BASEURL = " http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com"

postApi.createPost = (todos,id) => {
  return axios.post(`${BASEURL}/api/V1/todos/${id}`,todos)
}

postApi.getAllPostByUserID = (id) => {
  console.log('id',id)
  console.log('FULL URL',`${BASEURL}/posts/${id}`)
  return axios.get(`${BASEURL}/posts/${id}`)
}

export default postApi