import {
  computed,
  defineComponent,
  nextTick,
  onActivated,
  onMounted,
  reactive,
  ref,
  toRefs,
} from 'vue'

import { ElMessage, ElMessageBox } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { getMoreDictListApi } from '@/api/common'
import { getYearListApi } from '@/api/homeOperate/modelManage'
import {
  deleteTestPaperApi,
  getPaperApproveListApi,
} from '@/api/questionBank/paperReview'
import { paperStatusList, paperTypes } from '@/assets/js/common'
import { IGlobalState } from '@/store'
import { handleHeight, throttle } from '@/utils'
import { IMapList } from '@/views/homeOperate/NEMTActivity/typing'

import delPaper from '../components/delPaper.vue'
import RemoveModal from './removeRepeatQuestion.vue'
import SetTagModal from './setTagModal.vue'
