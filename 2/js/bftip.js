//bftip("消息类型（数字0-3）","消息内容（文本）");  0：消息、 1：正确、 2：错误、 3：感叹

function bftip(type, text) {
    // this.type = type;
    // this.text = text;

    // console.log(type);
    // console.log(text);
    if (document.getElementById("tip_box")) {
    } else {
        var tip_box = document.createElement('div');
        tip_box.id = "tip_box";
        tip_box.style = "position: fixed;right: 0;top: 20px;/*pointer-events: none;*/z-index: 9998;width: auto;height: auto;display: flex;flex-flow: column-reverse;align-items: flex-end;";
        document.body.appendChild(tip_box);
    }

    var tip_msg_box = document.createElement('div');
    tip_msg_box.style = "transition: all 300ms;padding: 15px;height: 25px;width: 0px;/* width: 225px; */display: flex;align-items: center;justify-content: center;background: #fff;border-radius: 14px;margin: 5px;-moz-box-shadow: 0px 1px 4px #c9c9c9;-webkit-box-shadow: 0px 1px 4px #c9c9c9;box-shadow: 0px 1px 4px #c9c9c9;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin: 10px;z-index: 9999;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";
    tip_msg_box.setAttribute("onclick", "javascript:this.parentNode.removeChild(this);");
    tip_msg_box.title = "点击关闭";
    var tip_msg = document.createElement('div');
    tip_msg.style = "width: 225px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align: center;";
    tip_msg.innerText = text;

    if (type == "1") {
        tip_msg_box.innerHTML = "✔️  " + tip_msg.innerText;
    }
    if (type == "2") {
        tip_msg_box.innerHTML = "❌  " + tip_msg.innerText;
    }
    if (type == "3") {
        tip_msg_box.innerHTML = "❗  " + tip_msg.innerText;
    }
    if (type == "0") {
        tip_msg_box.innerHTML = "💬  " + tip_msg.innerText;
    }

    document.getElementById('tip_box').appendChild(tip_msg_box);
    window.setTimeout(function () { tip_msg_box.style = "transition: all 300ms;padding: 15px;height: 25px;width: 225px;display: flex;align-items: center;justify-content: center;background: #fff;border-radius: 14px;margin: 5px;-moz-box-shadow: 0px 1px 4px #c9c9c9;-webkit-box-shadow: 0px 1px 4px #c9c9c9;box-shadow: 0px 1px 4px #c9c9c9;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin: 10px;z-index: 9999;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;"; }, 0);
    window.setTimeout(function () { tip_msg_box.style = "transition: all 300ms;padding: 15px;height: 25px;width: 0px;display: flex;align-items: center;justify-content: center;background: #fff;border-radius: 14px;margin: 5px;-moz-box-shadow: 0px 1px 4px #c9c9c9;-webkit-box-shadow: 0px 1px 4px #c9c9c9;box-shadow: 0px 1px 4px #c9c9c9;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin: 10px;z-index: 9999;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;"; }, 2500);
    window.setTimeout(function () { document.getElementById('tip_box').removeChild(tip_msg_box); }, 2750);


};


