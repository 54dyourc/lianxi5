class Msg {
    constructor(title = "Dyourc", content = "你好ddd") {
        this.title = title;
        this.content = content;
        this.init();
    }
    init() {
        const dom = document.createElement("div");
        dom.className = 'model';
        document.body.appendChild(dom);
        this.model=dom;

        const title = document.createElement("div");
        title.className = 'title';
        title.innerText = this.title;
        dom.appendChild(title);

        const content = document.createElement("div");
        content.className = 'content';
        content.innerText = this.content;
        dom.appendChild(content);

        const accept = document.createElement("div");
        accept.className = 'accept';
        accept.innerText = "确认";
        dom.appendChild(accept);

        const cancel = document.createElement("div");
        cancel.className = 'cancel';
        cancel.innerText = "取消";
        dom.appendChild(cancel);

        accept.onclick = () => {
            this.remove(true);
        }

        cancel.onclick=()=>{
            this.remove(false);
        }
    }

    remove(result){
        this.model.remove();
        this.onclose(result);
    }
}