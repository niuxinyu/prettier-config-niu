import { computed, nextTick, onMounted, watch } from 'vue'

import { isUndefined } from 'lodash-es'

import { vSyncIndex } from '../../../directives/vSyncIndex'
import { useRouteType } from '../../../hooks/useRouteType'
import { useShowListeningFile } from '../../../hooks/useShowListeningFile'
import { useStickyCls } from '../../../hooks/useStickyCls'
import { useTabId } from '../../../hooks/useTabId'
import Editor from '../../Editor.vue'
import Anspart from './Anspart.vue'
import { optionKeys } from './config'
import { editSyncTabConfig, notEditSyncTabConfig } from './config'
import Container from './Container.vue'
import QuestionOption from './QuestionOption.vue'
import Sticky from './Sticky.vue'
import StickyTab1 from './StickyTab1.vue'

import { optionArrangementList } from '@/config'
import { katexRender, replaceLatexConstruction } from '@/utils'

const replacement = '$$$1';
