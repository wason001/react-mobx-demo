import { observable, action, makeObservable, computed} from 'mobx'
import moment from 'moment'

class AppStore {
    constructor() {
        // mobx 6 更新后，有变动, 不会自动进行更新，需要进行处理
        // 需要在store仓库中添加 makeObservable
        makeObservable(this)
    }

    @observable time = ''
    @observable todoList = []

    @computed get desc() {
        return `${this.time} 还有${this.todoList.length}条任务待完成`
    }

    @action addTodo = (todo) => {
        this.todoList.push(todo)
    }
    @action deleteTodo() {
        this.todoList.pop()
    }
    @action resetTodo() {
        this.todoList = []
    }
    @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }

}

const store = new AppStore()


setInterval(() => {
    store.getNow()
}, 1000)

export default store
