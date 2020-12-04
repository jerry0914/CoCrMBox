import { _decorator, Component, Node, Button, Label, ScrollView, Sprite, EditBox  } from 'cc';
import { MessageBox } from './MessageBox';
const { ccclass, property } = _decorator;

@ccclass('Tester')
export class Tester extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({type:Node}) nodeContent : Node = null;

    @property({type:Node}) nodeShow : Node = null;

    @property({type:Node}) nodeResult : Node = null;

    start () {
        var MsgBox:MessageBox = MessageBox.Instance.getComponent<MessageBox>(MessageBox);
        MsgBox.OnPositiveClickedCallback = this.onPositiveButtonClicked.bind(this);
        MsgBox.OnNegativeClickedCallback = this.OnNegativeButtonClicked.bind(this);
        MsgBox.OnCloseClickedCallback = this.OnCloseButtonClicked.bind(this);
        // MsgBox.OnPositiveClickedCallback = this.onPositiveButtonClicked;
        // MsgBox.OnPositiveClickedCallbackScope = this;
        // this.onPositiveButtonClicked.call(MsgBox.OnPositiveClickedCallbackScope);

        // MsgBox.OnNegativeClickedCallback = this.OnNegativeButtonClicked;
        // MsgBox.OnNegativeClickedCallbackScope = this;
        // this.OnNegativeButtonClicked.call(MsgBox.OnNegativeClickedCallbackScope);

        // MsgBox.OnCloseClickedCallback = this.OnCloseButtonClicked;
        // MsgBox.OnCloseClickedCallbackScope = this;
        // this.OnCloseButtonClicked.call(MsgBox.OnCloseClickedCallbackScope);
    }

    ShowText(){        
        var edbx = this.nodeContent.getComponent(EditBox);
        MessageBox.Show(edbx.string);
    };

    onPositiveButtonClicked(){     
        var lblResult = this.nodeResult.getComponent<Label>(Label);   
        lblResult.string = "Positive button is clicked.";
        
        MessageBox.Hide();
    }

    OnNegativeButtonClicked(){
        var lblResult:Label = this.nodeResult.getComponent<Label>(Label);
        lblResult.string = "Negative button is clicked.";
        MessageBox.Hide();
    }

    OnCloseButtonClicked(){
        var lblResult:Label = this.nodeResult.getComponent<Label>(Label);
        lblResult.string = "Close button is clicked.";
        MessageBox.Hide();
    }
}

