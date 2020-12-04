import { _decorator, Component, Node, Button, Label, ScrollView, Sprite ,EventHandler } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MessageBox')
export class MessageBox extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    static Instance : Node;
    @property({type:Node})
    nodeBlackBackground:Node = null;
    @property({type:Node})
    nodeCloseButton:Node = null;
    @property({type:Node})
    nodePositiveButton:Node = null;
    @property({type:Node})
    nodeNegativeButton:Node = null;
    @property({type:Node})
    nodeTitleText:Node = null;
    @property({type:Node})
    nodeContentText:Node = null;
    @property({type:Node})
    nodescrollView:Node = null;

    public OnPositiveClickedCallback : ()=>void;
    public OnPositiveClickedCallbackScope;

    public OnNegativeClickedCallback : ()=>void;
    public OnNegativeClickedCallbackScope;

    public OnCloseClickedCallback : ()=>void;
    public OnCloseClickedCallbackScope;

    onLoad (){
        MessageBox.Instance = this.node;
        MessageBox.Hide();
    }

    start () {
        this.nodePositiveButton.on(Node.EventType.TOUCH_END,this.OnPositiveClicked,this);
        this.nodeNegativeButton.on(Node.EventType.TOUCH_END,this.OnNegativeClicked,this); 
        this.nodeCloseButton.on(Node.EventType.TOUCH_END,this.OnCloseClicked,this); 
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
    static Show(content:string,title:string=null){
        if(MessageBox.Instance!=null){
            var MsgBox:MessageBox = MessageBox.Instance.getComponent<MessageBox>(MessageBox);
            MsgBox.nodeContentText.getComponent(Label).string = content;
            MsgBox.nodeTitleText.active = title!=null && title.length>0
            if(MsgBox.nodeTitleText.active){
                MsgBox.nodeTitleText.getComponent(Label).string = title;
            }
            MessageBox.Instance.active = true;
        }
    }

    static Hide(){
        MessageBox.Instance.active = false;
    }    
    

    OnPositiveClicked(){
        if(this.OnPositiveClickedCallback!=null){
            this.OnPositiveClickedCallback();            
        }
    }

    OnNegativeClicked(){
        // this.node.active = false;
        if(this.OnNegativeClickedCallback!=null){
            this.OnNegativeClickedCallback();
        }
    }

    OnCloseClicked(){
        this.node.active = false;
        if(this.OnCloseClickedCallback!=null){
            this.OnCloseClickedCallback();
        }
    }
}


