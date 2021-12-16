import Vue from 'vue'
import {
    Button, Image, Carousel, CarouselItem, Card, Timeline, TimelineItem, Form,Pagination,Col,
    FormItem, Tag,Input, Upload,Message,Table,TableColumn,Icon,DatePicker,TimePicker,Option,Select,Loading,MessageBox,Dialog
} from 'element-ui'
import locale from "element-ui/lib/locale"
import en from "element-ui/lib/locale/lang/en";
locale.use(en);
Vue.use(Button)
Vue.use(Image)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tag)
Vue.use(Upload)
Vue.use(Table)
Vue.use(Col)
Vue.use(TableColumn)
Vue.use(Icon)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
