const base = {
    get() {
        return {
            url : "http://localhost:8080/zhaopinxitong/",
            name: "zhaopinxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhaopinxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于java的招聘系统"
        } 
    }
}
export default base
