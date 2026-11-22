window.__ModuleLoader__.load({
  id: '@local/dsh-plugin-novel-assistant',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'novelAssistant';
    const STORAGE_KEY = 'dsh.novel-assistant.v2';
    const LEGACY_STORAGE_KEY = 'dsh.novel-assistant.v1';
    const NODE_H = 138;
    const MIN_NODE_W = 160;
    const MIN_DURATION = 2.5;
    const TIME_SCALE = 64;
    const TIMELINE_LEFT = 72;
    const TIMELINE_TOP = 60;
    const TIMELINE_HEADER_H = 44;
    const ACCENTS = ['#4f6d8a', '#8a5a44', '#5f7a63', '#8c4b4b', '#6f6287', '#8a7a4a'];

    const SAMPLE_TIMING = {
      'node-letter': [0, 2.5],
      'node-coordinate': [3, 6],
      'node-ledger': [7, 9.5],
      'node-threat': [9.5, 12.5],
      'node-leak': [13, 15.5],
      'node-hearing': [15.5, 20.5],
      'node-letter-final': [21, 23.5],
    };

    const SAMPLE_TIME_LABELS = {
      'node-letter': '信到之时 · 清晨',
      'node-coordinate': '渡口 · 午后',
      'node-ledger': '灯塔 · 深夜',
      'node-threat': '周岚办公室 · 傍晚',
      'node-leak': '码头 · 雨夜',
      'node-hearing': '听证会 · 台风夜',
      'node-letter-final': '旧书桌 · 清晨',
    };

    const ACTS = [
      { id: 'act1', label: 'act.one', note: 'outline.actOneNote', short: 'I' },
      { id: 'act2', label: 'act.two', note: 'outline.actTwoNote', short: 'II' },
      { id: 'act3', label: 'act.three', note: 'outline.actThreeNote', short: 'III' },
      { id: 'epilogue', label: 'act.epilogue', note: 'outline.actEpilogueNote', short: 'E' },
    ];

    const NODE_KINDS = ['setup', 'conflict', 'turn', 'climax', 'resolution'];
    const CHARACTER_ROLES = ['protagonist', 'deuteragonist', 'supporting', 'antagonist', 'mentor', 'other'];
    const CHAPTER_STATUSES = ['idea', 'draft', 'revise', 'done'];

    const DEFAULT_DATA = {
      version: 1,
      project: {
        title: '雾港来信',
        genre: '悬疑 · 家族秘密',
        logline: '一封迟到七年的信，让逃离故乡的女儿回到雾港，也把她推向父亲失踪案的中心。',
        synopsis:
          '七年前，雾港航运公司会计林致远在台风夜失踪，只留下一封从未寄出的信。七年后，女儿林晚收到同一笔迹的来信，被迫回到她竭力逃离的故乡。随着一本残缺的航运账本浮出水面，她发现父亲的失踪、港务局的开发计划与自己的童年记忆共享同一个秘密。真相的代价，是承认她最想相信的人也曾说谎。',
      },
      nodes: [
        {
          id: 'node-letter',
          title: '林晚收到父亲寄出的信',
          summary: '信纸上是只有父女二人知道的潮汐记号，邮戳日期却是父亲失踪后的第三年。',
          kind: 'setup',
          act: 'act1',
          x: 70,
          y: 70,
        },
        {
          id: 'node-coordinate',
          title: '信中坐标指向旧灯塔',
          summary: '林晚拒绝回乡，却在信纸夹层里发现一组坐标和一把生锈的储物柜钥匙。',
          kind: 'conflict',
          act: 'act1',
          x: 380,
          y: 70,
        },
        {
          id: 'node-ledger',
          title: '灯塔里发现残缺账本',
          summary: '账本记录了七年前那场台风的真实货单，最后一页写着阿澈的名字。',
          kind: 'turn',
          act: 'act1',
          x: 690,
          y: 70,
        },
        {
          id: 'node-threat',
          title: '周岚以母亲病情要挟',
          summary: '港务局长周岚提出用母亲的医疗记录交换账本，林晚第一次意识到父亲可能不是受害者。',
          kind: 'conflict',
          act: 'act2',
          x: 690,
          y: 300,
        },
        {
          id: 'node-leak',
          title: '程砚公开账目，阿澈失踪',
          summary: '报道引发舆论，也惊动了幕后的人；唯一愿意作证的阿澈在交付照片前消失。',
          kind: 'turn',
          act: 'act2',
          x: 380,
          y: 300,
        },
        {
          id: 'node-hearing',
          title: '台风夜听证会播放录音',
          summary: '林晚在码头听证会上播放父亲留下的录音，承认自己也是谎言的一部分。',
          kind: 'climax',
          act: 'act3',
          x: 70,
          y: 530,
        },
        {
          id: 'node-letter-final',
          title: '最后一封信被打开',
          summary: '真相公开，周岚倒台。林晚在旧书桌里找到父亲真正写给她的最后一封信。',
          kind: 'resolution',
          act: 'act3',
          x: 380,
          y: 530,
        },
      ],
      edges: [
        { id: 'edge-1', from: 'node-letter', to: 'node-coordinate', label: '指引' },
        { id: 'edge-2', from: 'node-coordinate', to: 'node-ledger', label: '发现' },
        { id: 'edge-3', from: 'node-ledger', to: 'node-threat', label: '招致' },
        { id: 'edge-4', from: 'node-threat', to: 'node-leak', label: '反制' },
        { id: 'edge-5', from: 'node-leak', to: 'node-hearing', label: '逼迫' },
        { id: 'edge-6', from: 'node-hearing', to: 'node-letter-final', label: '余波' },
      ],
      characters: [
        {
          id: 'char-linwan',
          name: '林晚',
          role: 'protagonist',
          birthDate: '1997-03-14',
          oneLine: '用理性隔绝过去的法医',
          traits: ['克制', '敏锐', '逃避亲密'],
          goal: '查明父亲失踪的真相，把母亲的病历从周岚手里拿回来。',
          conflict: '越接近真相，越要承认自己也是父亲谎言的一部分。',
          arc: '从用理性隔绝过去，到主动承担记忆的重量。',
          notes: '习惯在紧张时擦拭眼镜；父亲失踪后，再也没有回过雾港。',
          accent: '#4f6d8a',
        },
        {
          id: 'char-chengyan',
          name: '程砚',
          role: 'deuteragonist',
          birthDate: '1994-09-02',
          oneLine: '把旧案当成最后一篇报道的调查记者',
          traits: ['执着', '讽刺', '讲义气'],
          goal: '用一篇报道撬开雾港旧案，证明自己不是只会写边角新闻的人。',
          conflict: '保护线人，还是把真相完整公开。',
          arc: '从追逐爆点，到学会为真相的后果负责。',
          notes: '随身带一支坏掉一半的录音笔；与林晚在渡口重逢。',
          accent: '#8a5a44',
        },
        {
          id: 'char-azhe',
          name: '阿澈',
          role: 'supporting',
          birthDate: '2008-06-21',
          oneLine: '想带母亲离开雾港的码头少年',
          traits: ['机灵', '戒备', '渴望被看见'],
          goal: '拿到足够多的钱，带母亲离开雾港。',
          conflict: '用真相换船票，还是冒着风险站上听证会。',
          arc: '从被利用的旁观者，到主动交出关键证据的证人。',
          notes: '熟悉每一条码头暗道；失踪前把照片藏进储物柜。',
          accent: '#8a7a4a',
        },
        {
          id: 'char-zhoulan',
          name: '周岚',
          role: 'antagonist',
          birthDate: '1978-01-09',
          oneLine: '把秩序当成信仰的港务局长',
          traits: ['体面', '果决', '善于操纵'],
          goal: '守住雾港开发计划，也守住自己参与旧案的证据。',
          conflict: '权力与母亲病情之间的伦理裂缝，让她无法彻底冷硬。',
          arc: '从秩序的维护者，到被自己维护的秩序反噬。',
          notes: '永远穿熨得没有褶皱的白衬衫；在听证会前夜独自去过灯塔。',
          accent: '#8c4b4b',
        },
        {
          id: 'char-linzhiyuan',
          name: '林致远',
          role: 'mentor',
          birthDate: '1972-05-27',
          oneLine: '缺席七年的父亲，也是旧案的第一位说谎者',
          traits: ['温和', '缄默', '控制欲'],
          goal: '用一封封信把女儿推向她必须面对的真相。',
          conflict: '保护家人，还是让家人知道全部事实。',
          arc: '从缺席的圣人，变成有缺陷、也必须被理解的父亲。',
          notes: '只在录音、信件和回忆里出现；潮汐记号是他与林晚的暗号。',
          accent: '#5f7a63',
        },
      ],
      outline: {
        chapters: [
          {
            id: 'ch-1',
            title: '潮汐来信',
            act: 'act1',
            status: 'draft',
            summary: '林晚收到父亲七年前寄出的信，信纸上有只有父女知道的潮汐记号。她第一次动摇，决定回雾港。',
            beats: ['匿名信', '潮汐记号', '拒绝回乡'],
            pov: '林晚',
            wordTarget: 3200,
          },
          {
            id: 'ch-2',
            title: '回雾港',
            act: 'act1',
            status: 'idea',
            summary: '她以整理旧宅为由回到雾港，在渡口遇见程砚，也在母亲那里碰了一堵沉默的墙。',
            beats: ['旧宅', '渡口重逢', '母亲阻拦'],
            pov: '林晚',
            wordTarget: 3000,
          },
          {
            id: 'ch-3',
            title: '灯塔坐标',
            act: 'act1',
            status: 'draft',
            summary: '信中坐标指向废弃灯塔，林晚在塔顶发现半本航运账本，也听见了身后的脚步声。',
            beats: ['夜闯灯塔', '半本账本', '陌生脚步声'],
            pov: '林晚',
            wordTarget: 3600,
          },
          {
            id: 'ch-4',
            title: '失踪的线人',
            act: 'act2',
            status: 'draft',
            summary: '账本最后一页写着阿澈的名字；阿澈在交付照片前失踪，程砚意识到报道会逼出更坏的结果。',
            beats: ['阿澈', '照片', '失踪'],
            pov: '程砚',
            wordTarget: 3400,
          },
          {
            id: 'ch-5',
            title: '交换条件',
            act: 'act2',
            status: 'idea',
            summary: '周岚提出用母亲的医疗记录交换账本，林晚假装答应，第一次走进周岚的家。',
            beats: ['谈判', '医疗记录', '假意合作'],
            pov: '林晚',
            wordTarget: 3800,
          },
          {
            id: 'ch-6',
            title: '台风听证会',
            act: 'act2',
            status: 'draft',
            summary: '程砚公开部分账目引发舆论，林晚决定在听证会播放父亲录音。台风逼近，码头封港。',
            beats: ['报道', '舆论', '录音'],
            pov: '双线',
            wordTarget: 4200,
          },
          {
            id: 'ch-7',
            title: '最后一封信',
            act: 'act3',
            status: 'revise',
            summary: '真相公开，周岚倒台；林晚在父亲旧书桌里找到未寄出的最后一封信。',
            beats: ['听证会', '旧书桌', '最后一封信'],
            pov: '林晚',
            wordTarget: 4000,
          },
          {
            id: 'ch-8',
            title: '潮水退去',
            act: 'act3',
            status: 'idea',
            summary: '林晚把父亲的骨灰撒进雾港，决定留下来开一间旧书店。程砚把录音笔留给了她。',
            beats: ['骨灰', '旧书店', '黎明'],
            pov: '林晚',
            wordTarget: 2600,
          },
        ],
      },
    };

    const ZH = {
      'app.kicker': 'NOVEL WORKBENCH',
      'app.title': '小说创作台',
      'app.projectFallback': '未命名作品',
      'app.editProject': '作品资料',
      'app.export': '导出数据',
      'app.import': '导入数据',
      'app.exported': '已导出小说数据',
      'app.imported': '已导入小说数据',
      'app.importFailed': '导入失败：请选择此插件导出的 JSON 文件',
      'app.autoSaved': '已自动保存到本机',
      'app.saveFailed': '保存失败，请导出备份',
      'app.localOnly': '数据保存在当前浏览器；可随时导出备份',
      'app.projects': '作品库',
      'app.switchProject': '切换或新建小说项目',
      'app.projectLibraryDescription': '点击项目即可切换；每个项目拥有独立的剧情因果、角色卡与章节大纲。',
      'app.newProject': '新建小说项目',
      'app.newProjectTitle': '新建小说',
      'app.newProjectSubtitle': '先给作品一个名字，创建后可以继续补充资料。',
      'app.createProject': '创建项目',
      'app.projectCreated': '已创建小说项目',
      'app.editCurrentProject': '编辑当前作品资料',
      'app.deleteProject': '删除当前项目',
      'app.deleteProjectConfirm': '删除后，这个项目的因果图、角色卡和大纲都会一并移除。确认继续？',
      'app.projectDeleted': '已删除小说项目',
      'app.projectCount': '共 {n} 个项目',
      'app.activeProject': '当前',
      'app.projectTitleLabel': '作品名',
      'app.projectGenreLabel': '类型',
      'app.projectLoglineLabel': '一句话故事',
      'app.projectTitlePlaceholder': '例如：雾港来信',
      'app.projectGenrePlaceholder': '例如：悬疑 · 家族秘密',
      'app.projectLoglinePlaceholder': '谁想要什么，却被什么阻止？',
      'app.projectMeta': '{nodes} 个节点 · {chapters} 章',
      'app.noGenre': '未设置类型',
      'app.backToProjects': '返回作品库',
      'app.create': '创建',
      'panel.title': '小说创作台',
      'tab.graph': '剧情因果',
      'tab.characters': '角色卡片',
      'tab.outline': '小说大纲',
      'tab.graphHint': '情节因果图',
      'tab.charactersHint': '人物设定卡',
      'tab.outlineHint': '章节大纲',
      'common.add': '新增',
      'common.save': '保存修改',
      'common.cancel': '取消',
      'common.delete': '删除',
      'common.close': '关闭',
      'common.confirmDelete': '确认删除',
      'common.untitled': '未命名',
      'common.empty': '未填写',
      'common.search': '搜索',
      'common.all': '全部',
      'common.name': '名称',
      'common.none': '无',
      'common.target': '目标',
      'common.charCount': '{n} 字',
      'common.chapterCount': '{n} 章',
      'common.itemCount': '{n} 项',
      'common.savedToast': '已保存',
      'common.optional': '选填',
      'graph.kicker': 'CAUSAL TIMELINE',
      'graph.title': '剧情因果',
      'graph.subtitle': '横轴是故事时间，节点长度代表事件持续；拖动节点调整发生时间，拖右边缘调整时长。',
      'graph.addNode': '新增节点',
      'graph.connect': '连线模式',
      'graph.autoLayout': '整理泳道',
      'graph.connectHint': '依次点击「起因」和「结果」节点建立因果，Esc 退出',
      'graph.connectSource': '起因已选：{title}，再点一个结果节点',
      'graph.connectionMade': '已建立因果连线',
      'graph.edgeExists': '这两个节点之间已有连线',
      'graph.nodeCount': '{n} 个节点',
      'graph.edgeCount': '{n} 条因果',
      'graph.emptyTitle': '还没有情节节点',
      'graph.emptyBody': '从时间轴上的第一个事件开始；拖右边缘可以拉长它的持续时间。',
      'graph.emptyAction': '创建第一个节点',
      'graph.inspectorTitle': '故事结构',
      'graph.inspectorBody': '点击节点或连线，查看并编辑详情。',
      'graph.legend': '节点类型',
      'graph.completeness': '因果完整度',
      'graph.edgeList': '因果连线',
      'timeline.kicker': 'STORY TIME',
      'timeline.axis': '故事时间',
      'timeline.title': '时间轴',
      'timeline.hint': '拖动事件卡调整叙事顺序，点击查看节点。',
      'timeline.noTime': '未标注时间',
      'timeline.empty': '时间轴还没有事件',
      'timeline.add': '添加事件',
      'timeline.reordered': '已调整时间顺序',
      'timeline.count': '{n} 个时间点',
      'graph.orphans': '有 {n} 个节点尚未接入因果链。',
      'graph.noOrphans': '所有节点都已接入因果链。',
      'graph.nodeInspector': '情节节点',
      'graph.edgeInspector': '因果关系',
      'graph.fieldTitle': '节点标题',
      'graph.fieldSummary': '事件概述',
      'graph.fieldKind': '节点类型',
      'graph.fieldAct': '所属幕',
      'graph.fieldTimeStart': '开始时间',
      'graph.fieldTimeEnd': '结束时间',
      'graph.timeScaleHint': '统一时间刻度，可理解为天、周或章节',
      'graph.fieldTimeLabel': '时间说明',
      'graph.fieldTimeLabelHint': '如：七年前、第 3 天、台风夜',
      'graph.resizeHint': '拖动右边缘调整事件时长',
      'graph.duration': '时长 {n}',
      'graph.fieldLabel': '关系动词',
      'graph.fieldLabelHint': '如：导致、逼迫、揭示、反转',
      'graph.from': '起因',
      'graph.to': '结果',
      'graph.edgeSummary': '从「{from}」指向「{to}」',
      'graph.deleteNode': '删除节点',
      'graph.deleteEdge': '删除连线',
      'graph.deleteNodeConfirm': '删除节点会同时移除相关连线，确认继续？',
      'graph.deleteEdgeConfirm': '确认删除这条因果连线？',
      'graph.kind.setup': '铺垫',
      'graph.kind.conflict': '冲突',
      'graph.kind.turn': '转折',
      'graph.kind.climax': '高潮',
      'graph.kind.resolution': '收束',
      'graph.newTitle': '新情节节点',
      'graph.newSummary': '描述这个事件如何推动故事。',
      'graph.defaultEdgeLabel': '导致',
      'graph.relation.causes': '导致',
      'graph.relation.forces': '迫使',
      'graph.relation.reveals': '揭示',
      'graph.relation.blocks': '阻碍',
      'graph.relation.reverses': '反转',
      'graph.relation.echoes': '余波',
      'graph.added': '已创建情节节点',
      'graph.deleted': '已删除节点',
      'graph.edgeDeleted': '已删除连线',
      'graph.autoLaid': '已按时间整理事件泳道',
      'graph.noSummary': '尚未填写事件概述',
      'graph.positionHint': '拖动节点可调整位置',
      'graph.statNodes': '节点',
      'graph.statEdges': '因果',
      'graph.statConnected': '已接入',
      'graph.connections': '关联',
      'graph.edgeLabelPlaceholder': '例如：迫使',
      'graph.nodeTitlePlaceholder': '例如：林晚收到父亲七年后寄出的信',
      'graph.nodeSummaryPlaceholder': '这个事件发生了什么，又改变了什么？',
      'characters.kicker': 'CHARACTER DESK',
      'characters.title': '角色卡片',
      'characters.subtitle': '把人物的欲望、弱点与转变钉在卡片上。',
      'characters.add': '新增角色',
      'characters.searchPlaceholder': '搜索姓名、特质或目标',
      'characters.filterAll': '全部角色',
      'characters.count': '{n} 位角色',
      'characters.goal': '目标',
      'characters.conflict': '冲突',
      'characters.arc': '人物弧光',
      'characters.traits': '特质',
      'characters.noTraits': '尚未添加特质',
      'characters.emptyTitle': '还没有角色卡片',
      'characters.emptyBody': '先写下那个最不愿意面对真相的人。',
      'characters.emptyAction': '创建第一个角色',
      'characters.emptyFilter': '没有符合条件的角色',
      'characters.emptyFilterBody': '试试更换关键词或角色定位。',
      'characters.inspectorTitle': '人物档案',
      'characters.inspectorBody': '点击角色卡片，查看并编辑完整设定。',
      'characters.newName': '新角色',
      'characters.role': '角色定位',
      'characters.name': '姓名',
      'characters.birthDate': '出生日期',
      'characters.born': '生于 {date}',
      'characters.oneLine': '一句话定位',
      'characters.traitsField': '性格特质',
      'characters.traitsHint': '用逗号分隔，卡片显示前三枚标签',
      'characters.goalField': '核心目标',
      'characters.conflictField': '内在冲突',
      'characters.arcField': '人物弧光',
      'characters.notes': '补充笔记',
      'characters.accent': '卡片强调色',
      'characters.deleteConfirm': '确认删除这张角色卡片？',
      'characters.added': '已创建角色卡片',
      'characters.deleted': '已删除角色卡片',
      'characters.goalPlaceholder': '她/他最想要什么？',
      'characters.conflictPlaceholder': '什么在阻止她/他？',
      'characters.arcPlaceholder': '从……到……',
      'characters.notesPlaceholder': '口头禅、旧伤、秘密、关系……',
      'characters.oneLinePlaceholder': '如：用理性隔绝过去的法医',
      'characters.namePlaceholder': '角色姓名',
      'characters.role.protagonist': '主角',
      'characters.role.deuteragonist': '重要配角',
      'characters.role.supporting': '配角',
      'characters.role.antagonist': '反派',
      'characters.role.mentor': '引路人',
      'characters.role.other': '其他',
      'characters.highFreq': '高频特质',
      'characters.roleMix': '角色构成',
      'characters.statTotal': '角色',
      'characters.statMain': '主要角色',
      'characters.statTraits': '特质',
      'characters.statFiltered': '筛选结果',
      'characters.openCard': '打开角色卡',
      'outline.kicker': 'STORY OUTLINE',
      'outline.title': '小说大纲',
      'outline.subtitle': '用卷和章自定义小说结构，逐步细化每一章的梗概与节拍。',
      'outline.editProject': '编辑小说资料',
      'outline.addChapter': '新增章节',
      'outline.chapterCount': '{n} 章',
      'outline.words': '{n} 字',
      'outline.targetWords': '目标 {n} 字',
      'outline.statChapters': '章节',
      'outline.statVolumes': '卷',
      'outline.statDone': '已定稿',
      'outline.statTarget': '目标字数',
      'outline.statActs': '幕',
      'outline.volumes': '分卷',
      'outline.synopsis': '故事梗概',
      'outline.synopsisEmpty': '还没有写故事梗概。先回答：谁想要什么，却被什么阻止？',
      'outline.volume': '卷',
      'outline.volumeIndex': '第 {n} 卷',
      'outline.volumeFallback': '卷 {n}',
      'outline.addChapterInVolume': '在本卷新增章节',
      'outline.addVolume': '新建卷',
      'outline.volumeTitle': '卷名',
      'outline.editVolume': '编辑本卷',
      'outline.volumeSummary': '本卷概要',
      'outline.volumeSummaryPlaceholder': '这一卷要完成什么叙事任务？',
      'outline.volumeSummaryEmpty': '还没有本卷概要，可以在右侧补充。',
      'outline.volumeChapterCount': '{n} 章',
      'outline.volumeProgress': '{done}/{total} 章定稿',
      'outline.volumeAdded': '已新建一卷',
      'outline.volumeSaved': '已保存本卷',
      'outline.volumeDeleted': '已删除本卷',
      'outline.deleteVolume': '删除本卷',
      'outline.deleteVolumeConfirm': '删除本卷及其中的全部章节？',
      'outline.emptyVolume': '本卷还没有章节',
      'outline.emptyVolumesTitle': '还没有分卷',
      'outline.emptyVolumesBody': '先建立第一卷，再逐章细化故事结构。',
      'outline.addFirstVolume': '新建第一卷',
      'outline.chapterVolume': '所属卷',
      'outline.acts': '分卷',
      'outline.beats': '戏剧节拍',
      'outline.noBeats': '还没有拆解节拍',
      'outline.emptyTitle': '还没有章节',
      'outline.emptyBody': '从第一幕的第一章开始，把故事往前推一步。',
      'outline.inspectorTitle': '大纲进度',
      'outline.inspectorBody': '点击卷或章节，查看并编辑结构、梗概与节拍。',
      'outline.chapter': '章节',
      'outline.chapterTitle': '章节标题',
      'outline.chapterSummary': '本章梗概',
      'outline.chapterBeats': '戏剧节拍',
      'outline.beatsHint': '每行一个节拍',
      'outline.chapterPov': '视角人物',
      'outline.chapterTarget': '目标字数',
      'outline.chapterStatus': '写作状态',
      'outline.chapterAct': '所属幕',
      'outline.newTitle': '新章节',
      'outline.newSummary': '写下这一章必须发生的事。',
      'outline.deleteConfirm': '确认删除这一章？',
      'outline.added': '已新增章节',
      'outline.deleted': '已删除章节',
      'outline.status.idea': '构思',
      'outline.status.draft': '草稿',
      'outline.status.revise': '修订',
      'outline.status.done': '定稿',
      'outline.project': '小说资料',
      'outline.projectTitle': '书名',
      'outline.projectGenre': '类型',
      'outline.projectLogline': '一句话故事',
      'outline.projectSynopsis': '故事梗概',
      'outline.projectTitlePlaceholder': '给这个故事一个名字',
      'outline.projectGenrePlaceholder': '如：悬疑 · 家族秘密',
      'outline.projectLoglinePlaceholder': '谁，想要什么，却被什么阻止？',
      'outline.projectSynopsisPlaceholder': '展开故事的核心冲突与走向。',
      'outline.projectSaved': '已更新小说资料',
      'outline.noPov': '未指定',
      'outline.actProgress': '{done}/{total} 章定稿',
      'outline.statusMix': '状态分布',
      'outline.emptyAct': '本幕还没有章节',
      'outline.untitledChapter': '未命名章节',
      'outline.chapterIndex': '第 {n} 章',
      'outline.noSummary': '尚未填写本章梗概',
      'outline.targetLabel': '目标',
      'outline.povLabel': '视角',
      'outline.wordTargetPlaceholder': '如 3500',
      'outline.selectChapter': '选择章节',
      'outline.addFirstChapter': '添加第一章',
      'outline.actOneNote': '建置',
      'outline.actTwoNote': '对抗',
      'outline.actThreeNote': '收束',
      'outline.actEpilogueNote': '余波',
      'outline.projectEmpty': '未命名作品',
      'outline.chapterWordTarget': '{n} 字目标',
      'outline.overallProgress': '全书进度',
      'outline.noBeatsHint': '在章节详情中拆解节拍。',
      'act.one': '第一幕',
      'act.two': '第二幕',
      'act.three': '第三幕',
      'act.epilogue': '尾声',
      'inspector.close': '关闭详情',
      'inspector.save': '保存修改',
      'inspector.delete': '删除',
      'inspector.confirm': '确认删除',
      'inspector.unsaved': '修改尚未保存',
      'inspector.tip': '按 Esc 关闭',
      'inspector.node': '情节节点',
      'inspector.edge': '因果关系',
      'inspector.character': '角色卡',
      'inspector.chapter': '章节',
      'inspector.volume': '卷',
      'inspector.project': '小说资料',
      'common.moveUp': '上移',
      'common.moveDown': '下移',
    };

    const EN = {
      'app.kicker': 'NOVEL WORKBENCH',
      'app.title': 'Novel Workbench',
      'app.projectFallback': 'Untitled Novel',
      'app.editProject': 'Project details',
      'app.export': 'Export data',
      'app.import': 'Import data',
      'app.exported': 'Novel data exported',
      'app.imported': 'Novel data imported',
      'app.importFailed': 'Import failed: choose a JSON file exported by this plugin',
      'app.autoSaved': 'Auto-saved locally',
      'app.saveFailed': 'Save failed — export a backup',
      'app.localOnly': 'Data lives in this browser; export a backup anytime',
      'app.projects': 'Projects',
      'app.switchProject': 'Switch or create a novel project',
      'app.projectLibraryDescription': 'Click a project to switch; each project keeps its own causality graph, character cards, and outline.',
      'app.newProject': 'New novel project',
      'app.newProjectTitle': 'New novel',
      'app.newProjectSubtitle': 'Give the story a name first; you can fill in the details afterwards.',
      'app.createProject': 'Create project',
      'app.projectCreated': 'Novel project created',
      'app.editCurrentProject': 'Edit current project',
      'app.deleteProject': 'Delete current project',
      'app.deleteProjectConfirm': 'This removes the project’s graph, character cards, and outline. Continue?',
      'app.projectDeleted': 'Novel project deleted',
      'app.projectCount': 'Projects: {n}',
      'app.activeProject': 'Current',
      'app.projectTitleLabel': 'Title',
      'app.projectGenreLabel': 'Genre',
      'app.projectLoglineLabel': 'Logline',
      'app.projectTitlePlaceholder': 'e.g. Letters from Fog Harbor',
      'app.projectGenrePlaceholder': 'e.g. Mystery · Family secret',
      'app.projectLoglinePlaceholder': 'Who wants what, and what stops them?',
      'app.projectMeta': '{nodes} events · {chapters} chapters',
      'app.noGenre': 'No genre',
      'app.backToProjects': 'Back to projects',
      'app.create': 'Create',
      'panel.title': 'Novel Workbench',
      'tab.graph': 'Causality',
      'tab.characters': 'Characters',
      'tab.outline': 'Outline',
      'tab.graphHint': 'Plot causality map',
      'tab.charactersHint': 'Character cards',
      'tab.outlineHint': 'Chapter outline',
      'common.add': 'Add',
      'common.save': 'Save changes',
      'common.cancel': 'Cancel',
      'common.delete': 'Delete',
      'common.close': 'Close',
      'common.confirmDelete': 'Delete anyway',
      'common.untitled': 'Untitled',
      'common.empty': 'Not set',
      'common.search': 'Search',
      'common.all': 'All',
      'common.name': 'Name',
      'common.none': 'None',
      'common.target': 'Target',
      'common.charCount': '{n} words',
      'common.chapterCount': '{n} chapters',
      'common.itemCount': '{n} items',
      'common.savedToast': 'Saved',
      'common.optional': 'Optional',
      'graph.kicker': 'CAUSAL TIMELINE',
      'graph.title': 'Plot Causality',
      'graph.subtitle': 'The horizontal axis is story time; node width shows duration. Drag a node to move it, or drag its right edge to resize.',
      'graph.addNode': 'New event',
      'graph.connect': 'Connect',
      'graph.autoLayout': 'Pack lanes',
      'graph.connectHint': 'Click a cause, then an effect. Press Esc to exit.',
      'graph.connectSource': 'Cause selected: {title}. Now click the effect.',
      'graph.connectionMade': 'Causal link created',
      'graph.edgeExists': 'These events are already linked',
      'graph.nodeCount': '{n} events',
      'graph.edgeCount': '{n} links',
      'graph.emptyTitle': 'No plot events yet',
      'graph.emptyBody': 'Start with the first event on the timeline; drag its right edge to extend its duration.',
      'graph.emptyAction': 'Create the first event',
      'graph.inspectorTitle': 'Story structure',
      'graph.inspectorBody': 'Select an event or link to inspect it.',
      'graph.legend': 'Event types',
      'graph.completeness': 'Causal coverage',
      'graph.edgeList': 'Causal links',
      'timeline.kicker': 'STORY TIME',
      'timeline.axis': 'STORY TIME',
      'timeline.title': 'Timeline',
      'timeline.hint': 'Drag event cards to reorder the story; click to inspect a node.',
      'timeline.noTime': 'Time not set',
      'timeline.empty': 'No events on the timeline yet',
      'timeline.add': 'Add event',
      'timeline.reordered': 'Timeline order updated',
      'timeline.count': 'Story moments: {n}',
      'graph.orphans': '{n} events are not connected yet.',
      'graph.noOrphans': 'Every event is connected.',
      'graph.nodeInspector': 'Plot event',
      'graph.edgeInspector': 'Causal link',
      'graph.fieldTitle': 'Event title',
      'graph.fieldSummary': 'What happens',
      'graph.fieldKind': 'Event type',
      'graph.fieldAct': 'Act',
      'graph.fieldTimeStart': 'Start time',
      'graph.fieldTimeEnd': 'End time',
      'graph.timeScaleHint': 'One shared time scale; read it as days, weeks, or chapters',
      'graph.fieldTimeLabel': 'Time note',
      'graph.fieldTimeLabelHint': 'e.g. Seven years ago, Day 3, typhoon night',
      'graph.resizeHint': 'Drag the right edge to change duration',
      'graph.duration': 'Duration {n}',
      'graph.fieldLabel': 'Relationship',
      'graph.fieldLabelHint': 'e.g. causes, forces, reveals, reverses',
      'graph.from': 'Cause',
      'graph.to': 'Effect',
      'graph.edgeSummary': 'From “{from}” to “{to}”',
      'graph.deleteNode': 'Delete event',
      'graph.deleteEdge': 'Delete link',
      'graph.deleteNodeConfirm': 'Deleting this event also removes its links. Continue?',
      'graph.deleteEdgeConfirm': 'Delete this causal link?',
      'graph.kind.setup': 'Setup',
      'graph.kind.conflict': 'Conflict',
      'graph.kind.turn': 'Turn',
      'graph.kind.climax': 'Climax',
      'graph.kind.resolution': 'Resolution',
      'graph.newTitle': 'New plot event',
      'graph.newSummary': 'Describe how this event moves the story.',
      'graph.defaultEdgeLabel': 'causes',
      'graph.relation.causes': 'causes',
      'graph.relation.forces': 'forces',
      'graph.relation.reveals': 'reveals',
      'graph.relation.blocks': 'blocks',
      'graph.relation.reverses': 'reverses',
      'graph.relation.echoes': 'echoes',
      'graph.added': 'Plot event created',
      'graph.deleted': 'Event deleted',
      'graph.edgeDeleted': 'Link deleted',
      'graph.autoLaid': 'Event lanes arranged by time',
      'graph.noSummary': 'No description yet',
      'graph.positionHint': 'Drag events to reposition',
      'graph.statNodes': 'Events',
      'graph.statEdges': 'Links',
      'graph.statConnected': 'Connected',
      'graph.connections': 'links',
      'graph.edgeLabelPlaceholder': 'e.g. forces',
      'graph.nodeTitlePlaceholder': 'e.g. Lin receives a letter from her father, seven years later',
      'graph.nodeSummaryPlaceholder': 'What happens here, and what does it change?',
      'characters.kicker': 'CHARACTER DESK',
      'characters.title': 'Character Cards',
      'characters.subtitle': "Pin each character's desire, weakness, and change to a card.",
      'characters.add': 'New character',
      'characters.searchPlaceholder': 'Search name, trait, or goal',
      'characters.filterAll': 'All characters',
      'characters.count': '{n} characters',
      'characters.goal': 'Goal',
      'characters.conflict': 'Conflict',
      'characters.arc': 'Arc',
      'characters.traits': 'Traits',
      'characters.noTraits': 'No traits yet',
      'characters.emptyTitle': 'No character cards yet',
      'characters.emptyBody': 'Start with the person least willing to face the truth.',
      'characters.emptyAction': 'Create the first character',
      'characters.emptyFilter': 'No matching characters',
      'characters.emptyFilterBody': 'Try another keyword or role.',
      'characters.inspectorTitle': 'Cast overview',
      'characters.inspectorBody': 'Select a character card to edit the full profile.',
      'characters.newName': 'New character',
      'characters.role': 'Role',
      'characters.name': 'Name',
      'characters.birthDate': 'Birth date',
      'characters.born': 'Born {date}',
      'characters.oneLine': 'In one line',
      'characters.traitsField': 'Personality traits',
      'characters.traitsHint': 'Separate with commas; the card shows the first three',
      'characters.goalField': 'Core goal',
      'characters.conflictField': 'Inner conflict',
      'characters.arcField': 'Character arc',
      'characters.notes': 'Notes',
      'characters.accent': 'Card accent',
      'characters.deleteConfirm': 'Delete this character card?',
      'characters.added': 'Character card created',
      'characters.deleted': 'Character card deleted',
      'characters.goalPlaceholder': 'What do they want most?',
      'characters.conflictPlaceholder': 'What stands in their way?',
      'characters.arcPlaceholder': 'From … to …',
      'characters.notesPlaceholder': 'Catchphrase, wound, secret, relationships…',
      'characters.oneLinePlaceholder': 'e.g. A medical examiner hiding from her past',
      'characters.namePlaceholder': 'Character name',
      'characters.role.protagonist': 'Protagonist',
      'characters.role.deuteragonist': 'Major supporting',
      'characters.role.supporting': 'Supporting',
      'characters.role.antagonist': 'Antagonist',
      'characters.role.mentor': 'Mentor',
      'characters.role.other': 'Other',
      'characters.highFreq': 'Recurring traits',
      'characters.roleMix': 'Role mix',
      'characters.statTotal': 'Characters',
      'characters.statMain': 'Main cast',
      'characters.statTraits': 'Traits',
      'characters.statFiltered': 'Showing',
      'characters.openCard': 'Open character',
      'outline.kicker': 'STORY OUTLINE',
      'outline.title': 'Novel Outline',
      'outline.subtitle': 'Shape the structure with custom volumes and chapters, then refine each chapter step by step.',
      'outline.editProject': 'Edit project',
      'outline.addChapter': 'New chapter',
      'outline.chapterCount': '{n} chapters',
      'outline.words': '{n} words',
      'outline.targetWords': 'Target {n} words',
      'outline.statChapters': 'Chapters',
      'outline.statVolumes': 'Volumes',
      'outline.statDone': 'Final',
      'outline.statTarget': 'Target words',
      'outline.statActs': 'Acts',
      'outline.volumes': 'Volumes',
      'outline.synopsis': 'Synopsis',
      'outline.synopsisEmpty': 'No synopsis yet. Start with: who wants what, and what stops them?',
      'outline.volume': 'Volume',
      'outline.volumeIndex': 'Volume {n}',
      'outline.volumeFallback': 'Volume {n}',
      'outline.addChapterInVolume': 'Add chapter to this volume',
      'outline.addVolume': 'New volume',
      'outline.volumeTitle': 'Volume title',
      'outline.editVolume': 'Edit volume',
      'outline.volumeSummary': 'Volume summary',
      'outline.volumeSummaryPlaceholder': 'What must this volume accomplish?',
      'outline.volumeSummaryEmpty': 'No volume summary yet; add one in the inspector.',
      'outline.volumeChapterCount': '{n} chapters',
      'outline.volumeProgress': '{done}/{total} final',
      'outline.volumeAdded': 'Volume created',
      'outline.volumeSaved': 'Volume saved',
      'outline.volumeDeleted': 'Volume deleted',
      'outline.deleteVolume': 'Delete volume',
      'outline.deleteVolumeConfirm': 'Delete this volume and all of its chapters?',
      'outline.emptyVolume': 'No chapters in this volume',
      'outline.emptyVolumesTitle': 'No volumes yet',
      'outline.emptyVolumesBody': 'Create the first volume, then break it into chapters step by step.',
      'outline.addFirstVolume': 'Create the first volume',
      'outline.chapterVolume': 'Volume',
      'outline.acts': 'Volumes',
      'outline.beats': 'Beats',
      'outline.noBeats': 'No beats yet',
      'outline.emptyTitle': 'No chapters yet',
      'outline.emptyBody': 'Start with the first chapter and move the story one step.',
      'outline.inspectorTitle': 'Outline pulse',
      'outline.inspectorBody': 'Select a volume or chapter to edit structure, summary, and beats.',
      'outline.chapter': 'Chapter',
      'outline.chapterTitle': 'Chapter title',
      'outline.chapterSummary': 'Chapter summary',
      'outline.chapterBeats': 'Dramatic beats',
      'outline.beatsHint': 'One beat per line',
      'outline.chapterPov': 'POV',
      'outline.chapterTarget': 'Target words',
      'outline.chapterStatus': 'Status',
      'outline.chapterAct': 'Act',
      'outline.newTitle': 'New chapter',
      'outline.newSummary': 'Write the one thing that must happen.',
      'outline.deleteConfirm': 'Delete this chapter?',
      'outline.added': 'Chapter added',
      'outline.deleted': 'Chapter deleted',
      'outline.status.idea': 'Idea',
      'outline.status.draft': 'Draft',
      'outline.status.revise': 'Revise',
      'outline.status.done': 'Final',
      'outline.project': 'Project details',
      'outline.projectTitle': 'Title',
      'outline.projectGenre': 'Genre',
      'outline.projectLogline': 'Logline',
      'outline.projectSynopsis': 'Synopsis',
      'outline.projectTitlePlaceholder': 'Give this story a title',
      'outline.projectGenrePlaceholder': 'e.g. Mystery · Family secret',
      'outline.projectLoglinePlaceholder': 'Who wants what, and what stops them?',
      'outline.projectSynopsisPlaceholder': 'Expand the core conflict and arc.',
      'outline.projectSaved': 'Project details updated',
      'outline.noPov': 'Unassigned',
      'outline.actProgress': '{done}/{total} final',
      'outline.statusMix': 'Status mix',
      'outline.emptyAct': 'No chapters in this act',
      'outline.untitledChapter': 'Untitled chapter',
      'outline.chapterIndex': 'Chapter {n}',
      'outline.noSummary': 'No summary yet',
      'outline.targetLabel': 'Target',
      'outline.povLabel': 'POV',
      'outline.wordTargetPlaceholder': 'e.g. 3500',
      'outline.selectChapter': 'Select a chapter',
      'outline.addFirstChapter': 'Add the first chapter',
      'outline.actOneNote': 'Setup',
      'outline.actTwoNote': 'Confrontation',
      'outline.actThreeNote': 'Resolution',
      'outline.actEpilogueNote': 'Aftermath',
      'outline.projectEmpty': 'Untitled novel',
      'outline.chapterWordTarget': '{n} word target',
      'outline.overallProgress': 'Book progress',
      'outline.noBeatsHint': 'Add beats in the chapter details.',
      'act.one': 'Act I',
      'act.two': 'Act II',
      'act.three': 'Act III',
      'act.epilogue': 'Epilogue',
      'inspector.close': 'Close details',
      'inspector.save': 'Save changes',
      'inspector.delete': 'Delete',
      'inspector.confirm': 'Confirm delete',
      'inspector.unsaved': 'Unsaved changes',
      'inspector.tip': 'Press Esc to close',
      'inspector.node': 'Plot event',
      'inspector.edge': 'Causal link',
      'inspector.character': 'Character',
      'inspector.chapter': 'Chapter',
      'inspector.volume': 'Volume',
      'inspector.project': 'Project details',
      'common.moveUp': 'Move up',
      'common.moveDown': 'Move down',
    };

    function cloneDefault() {
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }

    function uid(prefix) {
      const tail =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID().slice(0, 8)
          : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
      return `${prefix}-${tail}`;
    }

    function format(template, vars) {
      return String(template).replace(/\{(\w+)\}/g, (match, key) =>
        vars && vars[key] !== undefined && vars[key] !== null ? String(vars[key]) : match,
      );
    }

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    function asString(value, fallback) {
      return typeof value === 'string' ? value : fallback || '';
    }

    function asTextArray(value) {
      if (Array.isArray(value)) return value.filter((item) => typeof item === 'string' && item.trim()).map((item) => item.trim());
      if (typeof value === 'string') {
        return value
          .split(/[,，、;；\n]/)
          .map((item) => item.trim())
          .filter(Boolean);
      }
      return [];
    }

    function normalizeAccent(value) {
      return typeof value === 'string' && /^#[0-9a-fA-F]{6}$/.test(value) ? value : ACCENTS[0];
    }

    function normalizeBirthDate(value) {
      if (typeof value !== 'string') return '';
      const trimmed = value.trim();
      if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return '';
      const date = new Date(`${trimmed}T00:00:00`);
      return Number.isNaN(date.getTime()) ? '' : trimmed;
    }

    function normalizeProject(input) {
      if (!input || typeof input !== 'object') return null;
      if (!Array.isArray(input.nodes) || !Array.isArray(input.edges) || !Array.isArray(input.characters)) {
        return null;
      }
      if (!input.outline || (!Array.isArray(input.outline.volumes) && !Array.isArray(input.outline.chapters))) {
        return null;
      }
      const meta = input.project && typeof input.project === 'object' ? input.project : input;
      const now = Date.now();
      const seenNodeIds = new Set();
      const nodes = [];
      input.nodes.forEach((node, index) => {
        if (!node || typeof node !== 'object' || typeof node.id !== 'string' || seenNodeIds.has(node.id)) return;
        seenNodeIds.add(node.id);
        const sampleTiming = SAMPLE_TIMING[node.id];
        const fallbackStart = sampleTiming ? sampleTiming[0] : index * 4;
        const fallbackEnd = sampleTiming ? sampleTiming[1] : fallbackStart + 2;
        const timeStart = Number.isFinite(Number(node.timeStart))
          ? Math.max(0, Number(node.timeStart))
          : fallbackStart;
        const requestedEnd = Number.isFinite(Number(node.timeEnd)) ? Number(node.timeEnd) : fallbackEnd;
        const timeEnd = Math.max(timeStart + MIN_DURATION, requestedEnd);
        nodes.push({
          id: node.id,
          title: asString(node.title, ''),
          summary: asString(node.summary, ''),
          kind: NODE_KINDS.includes(node.kind) ? node.kind : 'setup',
          act: ACTS.some((act) => act.id === node.act) ? node.act : 'act1',
          y: Number.isFinite(Number(node.y))
            ? clamp(Number(node.y), TIMELINE_TOP, 4000)
            : 70 + (index % 3) * 190,
          timeStart,
          timeEnd,
          timeLabel: asString(node.timeLabel, '') || SAMPLE_TIME_LABELS[node.id] || '',
        });
      });
      const nodeIds = new Set(nodes.map((node) => node.id));
      const seenEdgeIds = new Set();
      const edges = input.edges
        .filter(
          (edge) =>
            edge &&
            typeof edge === 'object' &&
            typeof edge.id === 'string' &&
            !seenEdgeIds.has(edge.id) &&
            nodeIds.has(edge.from) &&
            nodeIds.has(edge.to) &&
            edge.from !== edge.to,
        )
        .map((edge) => {
          seenEdgeIds.add(edge.id);
          return {
            id: edge.id,
            from: edge.from,
            to: edge.to,
            label: asString(edge.label, ''),
          };
        });
      const seenCharacterIds = new Set();
      const characters = input.characters
        .filter(
          (character) =>
            character &&
            typeof character === 'object' &&
            typeof character.id === 'string' &&
            !seenCharacterIds.has(character.id),
        )
        .map((character, index) => {
          seenCharacterIds.add(character.id);
          return {
            id: character.id,
            name: asString(character.name, ''),
            role: CHARACTER_ROLES.includes(character.role) ? character.role : 'supporting',
            birthDate: normalizeBirthDate(character.birthDate),
            oneLine: asString(character.oneLine, ''),
            traits: asTextArray(character.traits),
            goal: asString(character.goal, ''),
            conflict: asString(character.conflict, ''),
            arc: asString(character.arc, ''),
            notes: asString(character.notes, ''),
            accent: normalizeAccent(character.accent || ACCENTS[index % ACCENTS.length]),
          };
        });
      const seenChapterIds = new Set();
      function normalizeChapter(chapter) {
        if (
          !chapter ||
          typeof chapter !== 'object' ||
          typeof chapter.id !== 'string' ||
          seenChapterIds.has(chapter.id)
        ) {
          return null;
        }
        seenChapterIds.add(chapter.id);
        return {
          id: chapter.id,
          title: asString(chapter.title, ''),
          status: CHAPTER_STATUSES.includes(chapter.status) ? chapter.status : 'idea',
          summary: asString(chapter.summary, ''),
          beats: asTextArray(chapter.beats),
          pov: asString(chapter.pov, ''),
          wordTarget: Math.max(0, Math.round(Number(chapter.wordTarget) || 0)),
        };
      }
      let volumes = [];
      if (Array.isArray(input.outline.volumes)) {
        const seenVolumeIds = new Set();
        volumes = input.outline.volumes
          .filter((volume) => volume && typeof volume === 'object')
          .map((volume) => {
            let id = asString(volume.id, '') || uid('volume');
            while (seenVolumeIds.has(id)) id = uid('volume');
            seenVolumeIds.add(id);
            return {
              id,
              title: asString(volume.title, ''),
              summary: asString(volume.summary, ''),
              chapters: (Array.isArray(volume.chapters) ? volume.chapters : [])
                .map(normalizeChapter)
                .filter(Boolean),
            };
          });
      } else {
        const grouped = ACTS.map((act) => ({ act, chapters: [] }));
        input.outline.chapters.forEach((chapter) => {
          if (!chapter || typeof chapter !== 'object') return;
          const group = grouped.find((entry) => entry.act.id === chapter.act) || grouped[0];
          group.chapters.push(chapter);
        });
        volumes = grouped
          .filter((group) => group.chapters.length)
          .map((group) => ({
            id: uid('volume'),
            title: '',
            summary: '',
            chapters: group.chapters.map(normalizeChapter).filter(Boolean),
          }));
      }
      return {
        id: asString(input.id, '') || uid('project'),
        title: asString(meta.title, ''),
        genre: asString(meta.genre, ''),
        logline: asString(meta.logline, ''),
        synopsis: asString(meta.synopsis, ''),
        nodes,
        edges,
        characters,
        outline: { volumes },
        createdAt: Number.isFinite(Number(input.createdAt)) ? Number(input.createdAt) : now,
        updatedAt: Number.isFinite(Number(input.updatedAt)) ? Number(input.updatedAt) : now,
      };
    }

    function normalizeLibrary(input) {
      if (!input || typeof input !== 'object') return null;
      let rawProjects = Array.isArray(input.projects) ? input.projects : [];
      if (!rawProjects.length && Array.isArray(input.nodes) && Array.isArray(input.edges) && input.outline) {
        rawProjects = [input];
      }
      const projects = [];
      const usedIds = new Set();
      rawProjects.forEach((candidate) => {
        const project = normalizeProject(candidate);
        if (!project) return;
        while (usedIds.has(project.id)) project.id = uid('project');
        usedIds.add(project.id);
        projects.push(project);
      });
      if (!projects.length) return null;
      let activeProjectId = asString(input.activeProjectId, '');
      if (!projects.some((project) => project.id === activeProjectId)) activeProjectId = projects[0].id;
      return { version: 2, activeProjectId, projects };
    }

    function defaultProject() {
      const view = cloneDefault();
      const now = Date.now();
      const project = normalizeProject({
        id: 'project-wugang',
        ...view.project,
        nodes: view.nodes.map((node, index) => {
          const timing = SAMPLE_TIMING[node.id] || [index * 4, index * 4 + 2];
          return {
            ...node,
            timeStart: timing[0],
            timeEnd: timing[1],
            timeLabel: SAMPLE_TIME_LABELS[node.id] || '',
          };
        }),
        edges: view.edges,
        characters: view.characters,
        outline: view.outline,
        createdAt: now,
        updatedAt: now,
      });
      return project;
    }

    function defaultLibrary() {
      const project = defaultProject() || {
        id: 'project-default',
        title: '',
        genre: '',
        logline: '',
        synopsis: '',
        nodes: [],
        edges: [],
        characters: [],
        outline: { volumes: [] },
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      return { version: 2, activeProjectId: project.id, projects: [project] };
    }

    function loadStoredLibrary() {
      try {
        const current = window.localStorage.getItem(STORAGE_KEY);
        if (current) {
          const library = normalizeLibrary(JSON.parse(current));
          if (library) return library;
        }
      } catch {
        // Try the legacy key next.
      }
      try {
        const legacy = window.localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacy) {
          const library = normalizeLibrary(JSON.parse(legacy));
          if (library) return library;
        }
      } catch {
        // Fall through to the sample library.
      }
      return defaultLibrary();
    }

    function projectView(project) {
      return {
        project: {
          title: project.title,
          genre: project.genre,
          logline: project.logline,
          synopsis: project.synopsis,
        },
        nodes: project.nodes,
        edges: project.edges,
        characters: project.characters,
        outline: project.outline,
      };
    }

    function mergeProjectView(project, view) {
      const meta = view && view.project && typeof view.project === 'object' ? view.project : {};
      return {
        ...project,
        title: asString(meta.title, ''),
        genre: asString(meta.genre, ''),
        logline: asString(meta.logline, ''),
        synopsis: asString(meta.synopsis, ''),
        nodes: Array.isArray(view.nodes) ? view.nodes : project.nodes,
        edges: Array.isArray(view.edges) ? view.edges : project.edges,
        characters: Array.isArray(view.characters) ? view.characters : project.characters,
        outline:
          view.outline && Array.isArray(view.outline.volumes) ? view.outline : project.outline,
        updatedAt: Date.now(),
      };
    }

    function nodeKindLabel(t, kind) {
      return t(`graph.kind.${kind}`);
    }

    function roleLabel(t, role) {
      return t(`characters.role.${role}`);
    }

    function statusLabel(t, status) {
      return t(`outline.status.${status}`);
    }

    function actMeta(actId) {
      return ACTS.find((act) => act.id === actId) || ACTS[0];
    }

    function formatNumber(value) {
      try {
        return Number(value || 0).toLocaleString();
      } catch {
        return String(value || 0);
      }
    }

    function nodeWidth(node) {
      const duration = Math.max(MIN_DURATION, (Number(node.timeEnd) || 0) - (Number(node.timeStart) || 0));
      return Math.max(MIN_NODE_W, duration * TIME_SCALE);
    }

    function nodeX(node) {
      return TIMELINE_LEFT + Math.max(0, Number(node.timeStart) || 0) * TIME_SCALE;
    }

    function nodeBox(node) {
      return { x: nodeX(node), y: Number(node.y) || 70, w: nodeWidth(node), h: NODE_H };
    }

    function timeEndVisual(node) {
      const start = Math.max(0, Number(node.timeStart) || 0);
      return Math.max(
        Number(node.timeEnd) || start + MIN_DURATION,
        start + MIN_NODE_W / TIME_SCALE,
      );
    }

    function formatTime(value) {
      const number = Number(value) || 0;
      return Number.isInteger(number) ? String(number) : number.toFixed(1);
    }

    function timeRangeLabel(node) {
      return `T+${formatTime(node.timeStart)}–T+${formatTime(node.timeEnd)}`;
    }

    function autoLayoutNodes(nodes) {
      if (!nodes.length) return nodes;
      const sorted = nodes
        .slice()
        .sort(
          (left, right) =>
            (Number(left.timeStart) || 0) - (Number(right.timeStart) || 0) ||
            (Number(left.timeEnd) || 0) - (Number(right.timeEnd) || 0),
        );
      const laneEnds = [];
      const laneById = new Map();
      sorted.forEach((node) => {
        const start = Math.max(0, Number(node.timeStart) || 0);
        const visualEnd = timeEndVisual(node);
        let lane = laneEnds.findIndex((end) => end <= start + 0.01);
        if (lane < 0) {
          lane = laneEnds.length;
          laneEnds.push(visualEnd);
        } else {
          laneEnds[lane] = visualEnd;
        }
        laneById.set(node.id, lane);
      });
      return nodes.map((node) => ({
        ...node,
        y: 70 + (laneById.get(node.id) || 0) * 190,
      }));
    }

    function edgeGeometry(a, b) {
      const boxA = nodeBox(a);
      const boxB = nodeBox(b);
      const ac = { x: boxA.x + boxA.w / 2, y: boxA.y + boxA.h / 2 };
      const bc = { x: boxB.x + boxB.w / 2, y: boxB.y + boxB.h / 2 };
      const dx = bc.x - ac.x;
      const dy = bc.y - ac.y;
      let start;
      let end;
      let c1;
      let c2;
      if (Math.abs(dx) >= Math.abs(dy)) {
        if (dx >= 0) {
          start = { x: boxA.x + boxA.w, y: ac.y };
          end = { x: boxB.x, y: bc.y };
        } else {
          start = { x: boxA.x, y: ac.y };
          end = { x: boxB.x + boxB.w, y: bc.y };
        }
        const bend = (end.x - start.x) * 0.5;
        c1 = { x: start.x + bend, y: start.y };
        c2 = { x: end.x - bend, y: end.y };
      } else if (dy >= 0) {
        start = { x: ac.x, y: boxA.y + boxA.h };
        end = { x: bc.x, y: boxB.y };
        const bend = (end.y - start.y) * 0.5;
        c1 = { x: start.x, y: start.y + bend };
        c2 = { x: end.x, y: end.y - bend };
      } else {
        start = { x: ac.x, y: boxA.y };
        end = { x: bc.x, y: boxB.y + boxB.h };
        const bend = (end.y - start.y) * 0.5;
        c1 = { x: start.x, y: start.y + bend };
        c2 = { x: end.x, y: end.y - bend };
      }
      return {
        d: `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`,
        mid: { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 },
      };
    }

    function charactersInitials(name) {
      const value = String(name || '').trim();
      if (!value) return '?';
      return value.slice(0, 1);
    }

    function buildTraitStats(characters) {
      const counts = new Map();
      characters.forEach((character) => {
        character.traits.forEach((trait) => {
          counts.set(trait, (counts.get(trait) || 0) + 1);
        });
      });
      return Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, 8);
    }

    function flattenChapters(volumes) {
      return (volumes || []).flatMap((volume) => (Array.isArray(volume.chapters) ? volume.chapters : []));
    }

    function findChapterLocation(volumes, chapterId) {
      for (let volumeIndex = 0; volumeIndex < (volumes || []).length; volumeIndex += 1) {
        const volume = volumes[volumeIndex];
        const chapters = Array.isArray(volume.chapters) ? volume.chapters : [];
        const chapterIndex = chapters.findIndex((chapter) => chapter.id === chapterId);
        if (chapterIndex >= 0) {
          return { volume, chapter: chapters[chapterIndex], volumeIndex, chapterIndex };
        }
      }
      return null;
    }

    function volumeWordTarget(volume) {
      return (volume.chapters || []).reduce(
        (total, chapter) => total + (Number(chapter.wordTarget) || 0),
        0,
      );
    }

    function exportFileName(title) {
      const cleaned = String(title || 'novel')
        .trim()
        .replace(/[\\/:*?"<>|]+/g, '-')
        .replace(/\s+/g, '-');
      return `${cleaned || 'novel'}-workbench.json`;
    }

    const AppContext = React.createContext(null);

    function useApp() {
      const value = React.useContext(AppContext);
      if (!value) throw new Error('Novel Workbench context is missing');
      return value;
    }

    function useLocaleRevision(locale) {
      const [, setRevision] = React.useState(0);
      React.useEffect(() => {
        return locale.subscribe(() => setRevision((value) => value + 1));
      }, [locale]);
    }

    const ICON_PATHS = {
      graph: [
        h('rect', { key: 'a', x: 3, y: 3, width: 6, height: 6, rx: 1.2 }),
        h('rect', { key: 'b', x: 15, y: 15, width: 6, height: 6, rx: 1.2 }),
        h('path', { key: 'c', d: 'M9 6h4.5A2.5 2.5 0 0 1 16 8.5V15' }),
        h('path', { key: 'd', d: 'M6 9v3.5A2.5 2.5 0 0 0 8.5 15H12' }),
      ],
      users: [
        h('path', { key: 'a', d: 'M16 21v-1.8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V21' }),
        h('circle', { key: 'b', cx: 9, cy: 7, r: 3.2 }),
        h('path', { key: 'c', d: 'M22 21v-1.8a4 4 0 0 0-3-3.8' }),
        h('path', { key: 'd', d: 'M16.5 4.2a3.2 3.2 0 0 1 0 5.9' }),
      ],
      book: [
        h('path', { key: 'a', d: 'M4 19.4A2.6 2.6 0 0 1 6.6 17H20' }),
        h('path', { key: 'b', d: 'M6.6 2H20v20H6.6A2.6 2.6 0 0 1 4 19.4V4.6A2.6 2.6 0 0 1 6.6 2z' }),
        h('path', { key: 'c', d: 'M8.5 7h7' }),
      ],
      plus: [h('path', { key: 'a', d: 'M12 5v14M5 12h14' })],
      link: [
        h('path', { key: 'a', d: 'M10.5 13.5l3-3' }),
        h('path', { key: 'b', d: 'M7.2 16.8l-1 1a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0' }),
        h('path', { key: 'c', d: 'M16.8 7.2l1-1a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0' }),
      ],
      close: [h('path', { key: 'a', d: 'M6 6l12 12M18 6L6 18' })],
      trash: [
        h('path', { key: 'a', d: 'M4 7h16' }),
        h('path', { key: 'b', d: 'M9 7V4h6v3' }),
        h('path', { key: 'c', d: 'M6.5 7l.8 13h9.4l.8-13' }),
        h('path', { key: 'd', d: 'M10 11v5M14 11v5' }),
      ],
      download: [
        h('path', { key: 'a', d: 'M12 3v12' }),
        h('path', { key: 'b', d: 'M7.5 10.5L12 15l4.5-4.5' }),
        h('path', { key: 'c', d: 'M4 20h16' }),
      ],
      upload: [
        h('path', { key: 'a', d: 'M12 16V4' }),
        h('path', { key: 'b', d: 'M7.5 8.5L12 4l4.5 4.5' }),
        h('path', { key: 'c', d: 'M4 20h16' }),
      ],
      search: [
        h('circle', { key: 'a', cx: 10.5, cy: 10.5, r: 6.5 }),
        h('path', { key: 'b', d: 'M15.5 15.5L21 21' }),
      ],
      layout: [
        h('rect', { key: 'a', x: 3, y: 3, width: 7, height: 7, rx: 1.2 }),
        h('rect', { key: 'b', x: 14, y: 3, width: 7, height: 7, rx: 1.2 }),
        h('rect', { key: 'c', x: 8.5, y: 14, width: 7, height: 7, rx: 1.2 }),
        h('path', { key: 'd', d: 'M6.5 10v2h11v-2M12 12v2' }),
      ],
      arrow: [h('path', { key: 'a', d: 'M5 12h14M13 6l6 6-6 6' })],
      chevron: [h('path', { key: 'a', d: 'M9 5l7 7-7 7' })],
      chevronDown: [h('path', { key: 'a', d: 'M6 9l6 6 6-6' })],
      arrowUp: [h('path', { key: 'a', d: 'M12 19V5M6 11l6-6 6 6' })],
      arrowDown: [h('path', { key: 'a', d: 'M12 5v14M6 13l6 6 6-6' })],
      clock: [
        h('circle', { key: 'a', cx: 12, cy: 12, r: 8.5 }),
        h('path', { key: 'b', d: 'M12 7.5V12l3 2' }),
      ],
      check: [h('path', { key: 'a', d: 'M4.5 12.5l5 5 10-11' })],
      sparkle: [
        h('path', { key: 'a', d: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z' }),
        h('path', { key: 'b', d: 'M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z' }),
      ],
      alert: [
        h('path', { key: 'a', d: 'M12 3l9 17H3L12 3z' }),
        h('path', { key: 'b', d: 'M12 9v5' }),
        h('path', { key: 'c', d: 'M12 17.5v.1' }),
      ],
      target: [
        h('circle', { key: 'a', cx: 12, cy: 12, r: 8 }),
        h('circle', { key: 'b', cx: 12, cy: 12, r: 4 }),
        h('circle', { key: 'c', cx: 12, cy: 12, r: 1 }),
      ],
      user: [
        h('circle', { key: 'a', cx: 12, cy: 8, r: 4 }),
        h('path', { key: 'b', d: 'M4 21a8 8 0 0 1 16 0' }),
      ],
      eye: [
        h('path', { key: 'a', d: 'M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12z' }),
        h('circle', { key: 'b', cx: 12, cy: 12, r: 2.6 }),
      ],
      filter: [h('path', { key: 'a', d: 'M4 5h16l-6 7v6l-4 2v-8L4 5z' })],
    };

    function Icon({ name, size = 18, className = '' }) {
      const children = ICON_PATHS[name] || ICON_PATHS.book;
      return h(
        'svg',
        {
          className: `na-icon ${className}`,
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': true,
          focusable: false,
        },
        children,
      );
    }

    function PanelIcon({ size = 18, active = false }) {
      return h(
        'svg',
        {
          className: 'na-panel-icon',
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'data-active': active ? 'true' : 'false',
          'aria-hidden': true,
          focusable: false,
        },
        h('rect', { x: 3, y: 3, width: 6, height: 6, rx: 1.4 }),
        h('rect', { x: 15, y: 15, width: 6, height: 6, rx: 1.4 }),
        h('path', { d: 'M9 6h4.5A2.5 2.5 0 0 1 16 8.5V15' }),
        h('path', { d: 'M6 9v3.5A2.5 2.5 0 0 0 8.5 15H12' }),
      );
    }

    function BrandMark({ size = 38 }) {
      return h(
        'span',
        { className: 'na-brand-mark', 'aria-hidden': true },
        h(Icon, { name: 'graph', size: Math.round(size * 0.52) }),
      );
    }

    function Button({ variant = 'secondary', size = 'md', icon, children, className = '', ...rest }) {
      return h(
        'button',
        {
          type: 'button',
          className: `na-btn na-btn-${variant} na-btn-${size} ${className}`.trim(),
          ...rest,
        },
        icon ? h(Icon, { name: icon, size: 16 }) : null,
        children !== undefined && children !== null ? h('span', { className: 'na-btn-label' }, children) : null,
      );
    }

    function IconButton({ label, icon, className = '', ...rest }) {
      return h(
        'button',
        {
          type: 'button',
          className: `na-icon-btn ${className}`.trim(),
          'aria-label': label,
          title: label,
          ...rest,
        },
        h(Icon, { name: icon, size: 18 }),
      );
    }

    function Field({ label, hint, children, className = '', plain = false }) {
      const Tag = plain ? 'div' : 'label';
      return h(
        Tag,
        { className: `na-field ${className}`.trim() },
        h('span', { className: 'na-field-label' }, label),
        children,
        hint ? h('span', { className: 'na-hint' }, hint) : null,
      );
    }

    function TextInput({ className = '', ...rest }) {
      return h('input', { type: 'text', className: `na-input ${className}`.trim(), ...rest });
    }

    function TextArea({ rows = 4, className = '', ...rest }) {
      return h('textarea', { rows, className: `na-textarea ${className}`.trim(), ...rest });
    }

    function Select({ options, className = '', ...rest }) {
      return h(
        'select',
        { className: `na-select ${className}`.trim(), ...rest },
        options.map((option) => h('option', { key: option.value, value: option.value }, option.label)),
      );
    }

    function Segmented({ options, value, onChange, label }) {
      return h(
        'div',
        { className: 'na-segmented', role: 'group', 'aria-label': label },
        options.map((option) =>
          h(
            'button',
            {
              key: option.value,
              type: 'button',
              className: `na-segment ${value === option.value ? 'is-active' : ''}`.trim(),
              'aria-pressed': value === option.value,
              onClick: () => onChange(option.value),
            },
            option.label,
          ),
        ),
      );
    }

    function EmptyState({ icon = 'book', title, body, actionLabel, onAction }) {
      return h(
        'div',
        { className: 'na-empty' },
        h('span', { className: 'na-empty-icon' }, h(Icon, { name: icon, size: 26 })),
        h('h3', null, title),
        h('p', null, body),
        actionLabel && onAction ? h(Button, { variant: 'primary', icon: 'plus', onClick: onAction }, actionLabel) : null,
      );
    }

    function StatTile({ label, value }) {
      return h(
        'div',
        { className: 'na-stat-tile' },
        h('span', { className: 'na-stat-value' }, value),
        h('span', { className: 'na-stat-label' }, label),
      );
    }

    function ProgressBar({ value, tone = 'brand' }) {
      return h(
        'div',
        {
          className: `na-progress na-progress-${tone}`,
          role: 'progressbar',
          'aria-valuemin': 0,
          'aria-valuemax': 100,
          'aria-valuenow': clamp(Math.round(value), 0, 100),
        },
        h('span', { style: { width: `${clamp(value, 0, 100)}%` } }),
      );
    }

    function KindDot({ kind }) {
      return h('span', { className: 'na-kind-dot', 'data-kind': kind, 'aria-hidden': true });
    }

    function StatusBadge({ status }) {
      const { t } = useApp();
      return h(
        'span',
        { className: 'na-status-badge', 'data-status': status },
        h('span', { className: 'na-status-dot', 'aria-hidden': true }),
        statusLabel(t, status),
      );
    }

    function DeleteControl({ label, question, onConfirm, busyLabel }) {
      const { t } = useApp();
      const [confirming, setConfirming] = React.useState(false);
      React.useEffect(() => {
        if (!confirming) return undefined;
        const timer = window.setTimeout(() => setConfirming(false), 4500);
        return () => window.clearTimeout(timer);
      }, [confirming]);
      return h(
        'div',
        { className: `na-delete-control ${confirming ? 'is-confirming' : ''}`.trim() },
        confirming
          ? h(
              'div',
              { className: 'na-delete-confirm' },
              h('p', null, question),
              h(
                'div',
                { className: 'na-delete-actions' },
                h(Button, { variant: 'ghost', size: 'sm', onClick: () => setConfirming(false) }, t('common.cancel')),
                h(
                  Button,
                  {
                    variant: 'danger',
                    size: 'sm',
                    icon: 'trash',
                    onClick: () => {
                      setConfirming(false);
                      onConfirm();
                    },
                  },
                  busyLabel || t('inspector.confirm'),
                ),
              ),
            )
          : h(
              Button,
              { variant: 'ghost-danger', size: 'sm', icon: 'trash', onClick: () => setConfirming(true) },
              label,
            ),
      );
    }

    function GraphPage() {
      const { data, setData, selection, setSelection, t, tr, notify, addNode } = useApp();
      const [connectMode, setConnectMode] = React.useState(false);
      const [connectFrom, setConnectFrom] = React.useState(null);
      const [preview, setPreview] = React.useState(null);
      const gestureRef = React.useRef(null);

      const displayNodes = React.useMemo(
        () =>
          data.nodes.map((node) =>
            preview && preview.id === node.id
              ? { ...node, timeStart: preview.timeStart, timeEnd: preview.timeEnd, y: preview.y }
              : node,
          ),
        [data.nodes, preview],
      );
      const nodeById = React.useMemo(
        () => new Map(displayNodes.map((node) => [node.id, node])),
        [displayNodes],
      );
      const connectionCounts = React.useMemo(() => {
        const counts = new Map();
        data.nodes.forEach((node) => counts.set(node.id, 0));
        data.edges.forEach((edge) => {
          if (counts.has(edge.from)) counts.set(edge.from, counts.get(edge.from) + 1);
          if (counts.has(edge.to)) counts.set(edge.to, counts.get(edge.to) + 1);
        });
        return counts;
      }, [data.nodes, data.edges]);

      React.useEffect(() => {
        function handleMove(event) {
          const gesture = gestureRef.current;
          if (!gesture) return;
          if (gesture.mode === 'move') {
            const duration = gesture.originEnd - gesture.originStart;
            const rawStart = gesture.originStart + (event.clientX - gesture.startX) / TIME_SCALE;
            const timeStart = Math.max(0, Math.round(rawStart * 2) / 2);
            const y = clamp(
              gesture.originY + event.clientY - gesture.startY,
              TIMELINE_TOP,
              4000,
            );
            const next = {
              id: gesture.id,
              timeStart,
              timeEnd: timeStart + duration,
              y,
              mode: 'move',
            };
            gesture.current = next;
            setPreview(next);
            return;
          }
          const rawEnd = gesture.originEnd + (event.clientX - gesture.startX) / TIME_SCALE;
          const timeEnd = Math.max(
            gesture.originStart + MIN_DURATION,
            Math.round(rawEnd * 2) / 2,
          );
          const next = {
            id: gesture.id,
            timeStart: gesture.originStart,
            timeEnd,
            y: gesture.originY,
            mode: 'resize',
          };
          gesture.current = next;
          setPreview(next);
        }
        function handleUp() {
          const gesture = gestureRef.current;
          if (!gesture) return;
          gestureRef.current = null;
          const current = gesture.current;
          setPreview(null);
          if (!current) return;
          setData((previous) => ({
            ...previous,
            nodes: previous.nodes.map((node) =>
              node.id === gesture.id
                ? {
                    ...node,
                    timeStart: current.timeStart,
                    timeEnd: current.timeEnd,
                    y: current.y,
                  }
                : node,
            ),
          }));
        }
        window.addEventListener('pointermove', handleMove);
        window.addEventListener('pointerup', handleUp);
        window.addEventListener('pointercancel', handleUp);
        return () => {
          window.removeEventListener('pointermove', handleMove);
          window.removeEventListener('pointerup', handleUp);
          window.removeEventListener('pointercancel', handleUp);
        };
      }, [setData]);

      React.useEffect(() => {
        function handleKey(event) {
          if (event.key === 'Escape') {
            setConnectMode(false);
            setConnectFrom(null);
          }
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
      }, []);

      function beginGesture(event, node, mode) {
        event.preventDefault();
        event.stopPropagation();
        setSelection({ type: 'node', id: node.id });
        const current = {
          id: node.id,
          timeStart: node.timeStart,
          timeEnd: node.timeEnd,
          y: node.y,
          mode,
        };
        gestureRef.current = {
          id: node.id,
          mode,
          startX: event.clientX,
          startY: event.clientY,
          originStart: node.timeStart,
          originEnd: node.timeEnd,
          originY: node.y,
          current,
        };
        setPreview(current);
      }

      function toggleConnect() {
        setConnectMode((value) => !value);
        setConnectFrom(null);
      }

      function handleConnect(nodeId) {
        if (!connectFrom) {
          setConnectFrom(nodeId);
          setSelection({ type: 'node', id: nodeId });
          return;
        }
        if (connectFrom === nodeId) {
          setConnectFrom(null);
          return;
        }
        const existing = data.edges.find(
          (edge) =>
            (edge.from === connectFrom && edge.to === nodeId) ||
            (edge.from === nodeId && edge.to === connectFrom),
        );
        if (existing) {
          notify(t('graph.edgeExists'), 'warn');
          setConnectFrom(null);
          return;
        }
        const nextEdge = {
          id: uid('edge'),
          from: connectFrom,
          to: nodeId,
          label: t('graph.defaultEdgeLabel'),
        };
        setData((previous) => ({ ...previous, edges: [...previous.edges, nextEdge] }));
        setSelection({ type: 'edge', id: nextEdge.id });
        setConnectFrom(null);
        notify(t('graph.connectionMade'));
      }

      function handleNodePointerDown(event, node) {
        if (connectMode) {
          event.preventDefault();
          event.stopPropagation();
          handleConnect(node.id);
          return;
        }
        beginGesture(event, node, 'move');
      }

      function handleResizePointerDown(event, node) {
        if (connectMode) return;
        beginGesture(event, node, 'resize');
      }

      function handleNodeKeyDown(event, node) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        if (connectMode) handleConnect(node.id);
        else setSelection({ type: 'node', id: node.id });
      }

      function handleAutoLayout() {
        setData((previous) => ({
          ...previous,
          nodes: autoLayoutNodes(previous.nodes),
        }));
        notify(t('graph.autoLaid'));
      }

      const timelineMax = Math.max(
        12,
        Math.ceil(displayNodes.reduce((maximum, node) => Math.max(maximum, timeEndVisual(node)), 0)) + 2,
      );
      const canvasWidth = Math.max(1200, TIMELINE_LEFT + timelineMax * TIME_SCALE + 120);
      const canvasHeight = Math.max(
        680,
        displayNodes.reduce((maximum, node) => Math.max(maximum, node.y + NODE_H), 0) + 100,
      );
      const ticks = [];
      for (let tick = 0; tick <= timelineMax; tick += 1) ticks.push(tick);
      const sourceTitle = connectFrom && nodeById.get(connectFrom) ? nodeById.get(connectFrom).title : '';

      return h(
        'section',
        { className: 'na-view na-graph-view', 'aria-label': t('graph.title') },
        h(
          'div',
          { className: 'na-page-head na-graph-head' },
          h(
            'div',
            { className: 'na-page-heading' },
            h('span', { className: 'na-kicker' }, t('graph.kicker')),
            h('h2', { className: 'na-page-title' }, t('graph.title')),
            h('p', { className: 'na-page-subtitle' }, t('graph.subtitle')),
          ),
          h(
            'div',
            { className: 'na-page-actions' },
            h(Button, { variant: 'primary', icon: 'plus', onClick: addNode }, t('graph.addNode')),
            h(
              Button,
              {
                variant: connectMode ? 'active' : 'secondary',
                icon: 'link',
                'aria-pressed': connectMode,
                onClick: toggleConnect,
              },
              connectMode ? t('common.cancel') : t('graph.connect'),
            ),
            h(Button, { variant: 'ghost', icon: 'layout', onClick: handleAutoLayout }, t('graph.autoLayout')),
          ),
        ),
        h(
          'div',
          { className: `na-graph-stage ${connectMode ? 'is-connecting' : ''}`.trim() },
          connectMode
            ? h(
                'div',
                { className: 'na-connect-bar', role: 'status' },
                h(Icon, { name: 'link', size: 15 }),
                h('span', null, connectFrom ? tr('graph.connectSource', { title: sourceTitle }) : t('graph.connectHint')),
                h(
                  'button',
                  {
                    type: 'button',
                    className: 'na-connect-exit',
                    onClick: () => {
                      setConnectMode(false);
                      setConnectFrom(null);
                    },
                  },
                  t('common.cancel'),
                ),
              )
            : null,
          h(
            'div',
            { className: 'na-canvas-scroll' },
            h(
              'div',
              {
                className: 'na-canvas',
                style: { width: canvasWidth, height: canvasHeight },
              },
              h(
                'svg',
                {
                  className: 'na-edge-layer',
                  width: canvasWidth,
                  height: canvasHeight,
                  viewBox: `0 0 ${canvasWidth} ${canvasHeight}`,
                  'aria-hidden': true,
                },
                h(
                  'defs',
                  null,
                  h(
                    'marker',
                    {
                      id: 'na-arrow',
                      viewBox: '0 0 10 10',
                      refX: 8,
                      refY: 5,
                      markerWidth: 6,
                      markerHeight: 6,
                      orient: 'auto-start-reverse',
                    },
                    h('path', { d: 'M 0 0 L 10 5 L 0 10 z', className: 'na-arrow-head' }),
                  ),
                  h(
                    'marker',
                    {
                      id: 'na-arrow-active',
                      viewBox: '0 0 10 10',
                      refX: 8,
                      refY: 5,
                      markerWidth: 6,
                      markerHeight: 6,
                      orient: 'auto-start-reverse',
                    },
                    h('path', { d: 'M 0 0 L 10 5 L 0 10 z', className: 'na-arrow-head is-active' }),
                  ),
                ),
                h(
                  'g',
                  { className: 'na-time-axis', 'aria-hidden': true },
                  h('rect', {
                    className: 'na-time-axis-band',
                    x: 0,
                    y: 0,
                    width: canvasWidth,
                    height: TIMELINE_HEADER_H,
                  }),
                  h(
                    'text',
                    { className: 'na-time-axis-title', x: 16, y: 27 },
                    t('timeline.axis'),
                  ),
                  ticks.map((tick) => {
                    const x = TIMELINE_LEFT + tick * TIME_SCALE;
                    return h(
                      'g',
                      { key: tick },
                      h('line', {
                        className: 'na-time-gridline',
                        x1: x,
                        y1: TIMELINE_HEADER_H,
                        x2: x,
                        y2: canvasHeight,
                      }),
                      tick % 2 === 0
                        ? h(
                            'text',
                            {
                              className: 'na-time-tick',
                              x,
                              y: 28,
                              textAnchor: 'middle',
                            },
                            `T+${tick}`,
                          )
                        : null,
                    );
                  }),
                  h('line', {
                    className: 'na-time-axis-line',
                    x1: 0,
                    y1: TIMELINE_HEADER_H,
                    x2: canvasWidth,
                    y2: TIMELINE_HEADER_H,
                  }),
                ),
                data.edges.map((edge) => {
                  const from = nodeById.get(edge.from);
                  const to = nodeById.get(edge.to);
                  if (!from || !to) return null;
                  const geometry = edgeGeometry(from, to);
                  const active = selection && selection.type === 'edge' && selection.id === edge.id;
                  const label = edge.label || '';
                  const labelWidth = Math.max(44, label.length * 12 + 20);
                  return h(
                    'g',
                    { key: edge.id, className: 'na-edge-group' },
                    h('path', {
                      className: 'na-edge-hit',
                      d: geometry.d,
                      onClick: (event) => {
                        event.stopPropagation();
                        setSelection({ type: 'edge', id: edge.id });
                      },
                    }),
                    h('path', {
                      className: `na-edge ${active ? 'is-active' : ''}`.trim(),
                      d: geometry.d,
                      markerEnd: active ? 'url(#na-arrow-active)' : 'url(#na-arrow)',
                    }),
                    label
                      ? h(
                          'g',
                          {
                            className: `na-edge-label ${active ? 'is-active' : ''}`.trim(),
                            transform: `translate(${geometry.mid.x}, ${geometry.mid.y})`,
                          },
                          h('rect', {
                            x: -labelWidth / 2,
                            y: -10,
                            width: labelWidth,
                            height: 20,
                            rx: 6,
                          }),
                          h('text', { x: 0, y: 4, textAnchor: 'middle' }, label),
                        )
                      : null,
                  );
                }),
              ),
              data.nodes.map((model) => {
                const node = nodeById.get(model.id) || model;
                const active = selection && selection.type === 'node' && selection.id === model.id;
                const source = connectFrom === model.id;
                const connections = connectionCounts.get(model.id) || 0;
                const moving =
                  preview && preview.id === model.id && preview.mode === 'move';
                const resizing =
                  preview && preview.id === model.id && preview.mode === 'resize';
                return h(
                  'article',
                  {
                    key: model.id,
                    className: `na-node ${active ? 'is-selected' : ''} ${source ? 'is-source' : ''} ${
                      moving ? 'is-dragging' : ''
                    } ${resizing ? 'is-resizing' : ''}`.trim(),
                    'data-kind': node.kind,
                    role: 'button',
                    tabIndex: 0,
                    'aria-label': `${node.title || t('common.untitled')}, ${timeRangeLabel(node)}`,
                    style: {
                      left: nodeX(node),
                      top: node.y,
                      width: nodeWidth(node),
                    },
                    onPointerDown: (event) => handleNodePointerDown(event, model),
                    onClick: (event) => {
                      event.stopPropagation();
                      if (!connectMode) setSelection({ type: 'node', id: model.id });
                    },
                    onKeyDown: (event) => handleNodeKeyDown(event, model),
                  },
                  h(
                    'div',
                    { className: 'na-node-head' },
                    h(
                      'span',
                      { className: 'na-node-kind' },
                      h(KindDot, { kind: node.kind }),
                      nodeKindLabel(t, node.kind),
                    ),
                    h(
                      'span',
                      {
                        className: 'na-node-time-range',
                        title: tr('graph.duration', {
                          n: formatTime(node.timeEnd - node.timeStart),
                        }),
                      },
                      timeRangeLabel(node),
                    ),
                  ),
                  h('h3', { className: 'na-node-title', title: node.title }, node.title || t('common.untitled')),
                  h('p', { className: 'na-node-summary' }, node.summary || t('graph.noSummary')),
                  h(
                    'div',
                    { className: 'na-node-foot' },
                    h(
                      'span',
                      { className: 'na-node-foot-meta' },
                      h('span', { className: 'na-node-act' }, t(actMeta(node.act).label)),
                      h('span', { className: 'na-dot-sep' }, '·'),
                      h(
                        'span',
                        { className: 'na-node-time', title: node.timeLabel || t('timeline.noTime') },
                        h(Icon, { name: 'clock', size: 11 }),
                        node.timeLabel || t('timeline.noTime'),
                      ),
                    ),
                    h(
                      'span',
                      { className: 'na-node-link-count' },
                      h(Icon, { name: 'link', size: 11 }),
                      `${connections} ${t('graph.connections')}`,
                    ),
                  ),
                  connectMode
                    ? null
                    : h('span', {
                        className: 'na-node-resize',
                        title: t('graph.resizeHint'),
                        'aria-hidden': true,
                        onPointerDown: (event) => handleResizePointerDown(event, model),
                      }),
                );
              }),
              !data.nodes.length
                ? h(
                    'div',
                    { className: 'na-canvas-empty' },
                    h(EmptyState, {
                      icon: 'graph',
                      title: t('graph.emptyTitle'),
                      body: t('graph.emptyBody'),
                      actionLabel: t('graph.emptyAction'),
                      onAction: addNode,
                    }),
                  )
                : null,
            ),
          ),
        ),
      );
    }

    function CharacterCard({ character, selected, onClick }) {
      const { t, tr } = useApp();
      return h(
        'button',
        {
          type: 'button',
          className: `na-character-card ${selected ? 'is-selected' : ''}`.trim(),
          style: { '--na-accent': character.accent },
          onClick,
          'aria-label': `${t('characters.openCard')}: ${character.name || t('common.untitled')}`,
        },
        h(
          'span',
          { className: 'na-char-top' },
          h('span', { className: 'na-avatar' }, charactersInitials(character.name)),
          h(
            'span',
            { className: 'na-char-identity' },
            h('span', { className: 'na-char-name' }, character.name || t('common.untitled')),
            h(
              'span',
              { className: 'na-char-role' },
              roleLabel(t, character.role),
              character.birthDate ? h('span', { className: 'na-dot-sep' }, '·') : null,
              character.birthDate ? tr('characters.born', { date: character.birthDate }) : null,
            ),
          ),
          h('span', { className: 'na-char-chevron' }, h(Icon, { name: 'chevron', size: 15 })),
        ),
        h(
          'span',
          { className: 'na-char-oneline' },
          character.oneLine || t('characters.oneLinePlaceholder'),
        ),
        h(
          'span',
          { className: 'na-trait-row' },
          character.traits.length
            ? character.traits
                .slice(0, 3)
                .map((trait) => h('span', { key: trait, className: 'na-trait' }, trait))
            : h('span', { className: 'na-trait is-empty' }, t('characters.noTraits')),
          character.traits.length > 3
            ? h('span', { className: 'na-trait-more' }, `+${character.traits.length - 3}`)
            : null,
        ),
        h(
          'span',
          { className: 'na-char-goal' },
          h('span', { className: 'na-char-goal-label' }, t('characters.goal')),
          h('span', { className: 'na-char-goal-text' }, character.goal || t('common.empty')),
        ),
      );
    }

    function CharacterPage() {
      const { data, selection, setSelection, t, tr, addCharacter } = useApp();
      const [query, setQuery] = React.useState('');
      const [roleFilter, setRoleFilter] = React.useState('all');
      const search = query.trim().toLowerCase();
      const filtered = data.characters.filter((character) => {
        if (roleFilter !== 'all' && character.role !== roleFilter) return false;
        if (!search) return true;
        return [character.name, character.oneLine, character.goal, character.conflict, ...character.traits]
          .join(' ')
          .toLowerCase()
          .includes(search);
      });
      const traits = buildTraitStats(data.characters).slice(0, 5);

      return h(
        'section',
        { className: 'na-view na-scroll-view', 'aria-label': t('characters.title') },
        h(
          'div',
          { className: 'na-page-head' },
          h(
            'div',
            { className: 'na-page-heading' },
            h('span', { className: 'na-kicker' }, t('characters.kicker')),
            h('h2', { className: 'na-page-title' }, t('characters.title')),
            h('p', { className: 'na-page-subtitle' }, t('characters.subtitle')),
          ),
          h(
            'div',
            { className: 'na-page-actions' },
            h(Button, { variant: 'primary', icon: 'plus', onClick: addCharacter }, t('characters.add')),
          ),
        ),
        h(
          'div',
          { className: 'na-character-toolbar' },
          h(
            'label',
            { className: 'na-search' },
            h(Icon, { name: 'search', size: 16 }),
            h('input', {
              type: 'search',
              value: query,
              onChange: (event) => setQuery(event.target.value),
              placeholder: t('characters.searchPlaceholder'),
              'aria-label': t('characters.searchPlaceholder'),
            }),
          ),
          h(
            'label',
            { className: 'na-select-wrap' },
            h(Icon, { name: 'filter', size: 15 }),
            h(
              'select',
              {
                value: roleFilter,
                onChange: (event) => setRoleFilter(event.target.value),
                'aria-label': t('characters.role'),
              },
              h('option', { value: 'all' }, t('characters.filterAll')),
              CHARACTER_ROLES.map((role) => h('option', { key: role, value: role }, roleLabel(t, role))),
            ),
          ),
          h('span', { className: 'na-filter-count' }, tr('characters.count', { n: filtered.length })),
          traits.length
            ? h(
                'span',
                { className: 'na-trait-summary' },
                h('span', { className: 'na-trait-summary-label' }, t('characters.highFreq')),
                traits.map(([trait, count]) =>
                  h('span', { key: trait, className: 'na-trait is-quiet' }, `${trait} ${count}`),
                ),
              )
            : null,
        ),
        filtered.length
          ? h(
              'div',
              { className: 'na-character-grid' },
              filtered.map((character) =>
                h(CharacterCard, {
                  key: character.id,
                  character,
                  selected: selection && selection.type === 'character' && selection.id === character.id,
                  onClick: () => setSelection({ type: 'character', id: character.id }),
                }),
              ),
            )
          : h(
              'div',
              { className: 'na-empty-wrap' },
              h(EmptyState, {
                icon: data.characters.length ? 'search' : 'users',
                title: data.characters.length ? t('characters.emptyFilter') : t('characters.emptyTitle'),
                body: data.characters.length ? t('characters.emptyFilterBody') : t('characters.emptyBody'),
                actionLabel: data.characters.length ? null : t('characters.emptyAction'),
                onAction: data.characters.length ? null : addCharacter,
              }),
            ),
      );
    }

    function ChapterRow({ chapter, number, selected, onClick }) {
      const { t, tr } = useApp();
      return h(
        'button',
        {
          type: 'button',
          className: `na-chapter-row ${selected ? 'is-selected' : ''}`.trim(),
          onClick,
          'aria-label': tr('outline.chapterIndex', { n: number }) + ': ' + (chapter.title || t('outline.untitledChapter')),
        },
        h('span', { className: 'na-chapter-number' }, String(number).padStart(2, '0')),
        h(
          'span',
          { className: 'na-chapter-main' },
          h(
            'span',
            { className: 'na-chapter-top' },
            h(StatusBadge, { status: chapter.status }),
            h('span', { className: 'na-chapter-title' }, chapter.title || t('outline.untitledChapter')),
            chapter.wordTarget
              ? h('span', { className: 'na-chapter-target' }, tr('outline.chapterWordTarget', { n: formatNumber(chapter.wordTarget) }))
              : null,
          ),
          h('span', { className: 'na-chapter-summary' }, chapter.summary || t('outline.noSummary')),
          h(
            'span',
            { className: 'na-chapter-meta' },
            h(
              'span',
              { className: 'na-chapter-pov' },
              h(Icon, { name: 'eye', size: 13 }),
              chapter.pov || t('outline.noPov'),
            ),
            chapter.beats.length
              ? chapter.beats
                  .slice(0, 3)
                  .map((beat) => h('span', { key: beat, className: 'na-beat-chip' }, beat))
              : h('span', { className: 'na-beat-chip is-empty' }, t('outline.noBeats')),
            chapter.beats.length > 3
              ? h('span', { className: 'na-beat-more' }, `+${chapter.beats.length - 3}`)
              : null,
          ),
        ),
        h('span', { className: 'na-chapter-chevron' }, h(Icon, { name: 'chevron', size: 16 })),
      );
    }

    function OutlinePage() {
      const {
        data,
        selection,
        setSelection,
        t,
        tr,
        addChapter,
        addVolume,
        moveVolume,
      } = useApp();
      const volumes = data.outline.volumes;
      const chapters = flattenChapters(volumes);
      const done = chapters.filter((chapter) => chapter.status === 'done').length;
      const targetWords = chapters.reduce((total, chapter) => total + (Number(chapter.wordTarget) || 0), 0);
      const project = data.project;

      return h(
        'section',
        { className: 'na-view na-scroll-view na-outline-view', 'aria-label': t('outline.title') },
        h(
          'div',
          { className: 'na-page-head' },
          h(
            'div',
            { className: 'na-page-heading' },
            h('span', { className: 'na-kicker' }, t('outline.kicker')),
            h('h2', { className: 'na-page-title' }, t('outline.title')),
            h('p', { className: 'na-page-subtitle' }, t('outline.subtitle')),
          ),
          h(
            'div',
            { className: 'na-page-actions' },
            h(
              Button,
              { variant: 'secondary', icon: 'book', onClick: () => setSelection({ type: 'project' }) },
              t('outline.editProject'),
            ),
            h(Button, { variant: 'primary', icon: 'plus', onClick: addVolume }, t('outline.addVolume')),
          ),
        ),
        h(
          'div',
          { className: 'na-outline-doc' },
          h(
            'header',
            { className: 'na-outline-hero' },
            h(
              'div',
              { className: 'na-outline-hero-copy' },
              h('span', { className: 'na-outline-genre' }, project.genre || t('common.empty')),
              h('h3', { className: 'na-outline-title' }, project.title || t('outline.projectEmpty')),
              h('p', { className: 'na-outline-logline' }, project.logline || t('outline.projectLoglinePlaceholder')),
            ),
            h(
              'div',
              { className: 'na-outline-stats' },
              h(StatTile, { label: t('outline.statVolumes'), value: formatNumber(volumes.length) }),
              h(StatTile, { label: t('outline.statChapters'), value: formatNumber(chapters.length) }),
              h(StatTile, { label: t('outline.statDone'), value: formatNumber(done) }),
              h(StatTile, { label: t('outline.statTarget'), value: formatNumber(targetWords) }),
            ),
          ),
          h(
            'section',
            { className: 'na-synopsis-card' },
            h(
              'div',
              { className: 'na-section-label' },
              h(Icon, { name: 'book', size: 14 }),
              t('outline.synopsis'),
            ),
            h(
              'p',
              { className: project.synopsis ? 'na-synopsis' : 'na-synopsis is-empty' },
              project.synopsis || t('outline.synopsisEmpty'),
            ),
          ),
          volumes.length
            ? h(
                'div',
                { className: 'na-act-stack' },
                volumes.map((volume, volumeIndex) => {
                  const volumeChapters = Array.isArray(volume.chapters) ? volume.chapters : [];
                  const volumeDone = volumeChapters.filter((chapter) => chapter.status === 'done').length;
                  const volumeTarget = volumeChapters.reduce(
                    (total, chapter) => total + (Number(chapter.wordTarget) || 0),
                    0,
                  );
                  const volumeTitle =
                    volume.title || tr('outline.volumeFallback', { n: volumeIndex + 1 });
                  return h(
                    'section',
                    { key: volume.id, className: 'na-act-section na-volume-section' },
                    h(
                      'header',
                      { className: 'na-act-head' },
                      h(
                        'div',
                        { className: 'na-act-heading' },
                        h('span', { className: 'na-act-index' }, String(volumeIndex + 1)),
                        h(
                          'div',
                          { className: 'na-act-copy' },
                          h(
                            'div',
                            { className: 'na-act-title-row' },
                            h(
                              'button',
                              {
                                type: 'button',
                                className: 'na-volume-title',
                                title: t('outline.editVolume'),
                                'aria-label': t('outline.editVolume'),
                                onClick: () => setSelection({ type: 'volume', id: volume.id }),
                              },
                              volumeTitle,
                            ),
                            h('span', { className: 'na-act-note' }, t('outline.volume')),
                          ),
                          h(
                            'p',
                            { className: 'na-volume-summary' },
                            volume.summary || t('outline.volumeSummaryEmpty'),
                          ),
                          h(
                            'span',
                            { className: 'na-act-meta' },
                            tr('outline.chapterCount', { n: volumeChapters.length }),
                            volumeChapters.length
                              ? ` · ${tr('outline.volumeProgress', {
                                  done: volumeDone,
                                  total: volumeChapters.length,
                                })}`
                              : '',
                            volumeTarget
                              ? ` · ${tr('outline.words', { n: formatNumber(volumeTarget) })}`
                              : '',
                          ),
                        ),
                      ),
                      h(
                        'div',
                        { className: 'na-act-actions' },
                        volumeChapters.length
                          ? h(
                              'div',
                              { className: 'na-act-progress' },
                              h(ProgressBar, {
                                value: (volumeDone / volumeChapters.length) * 100,
                                tone:
                                  volumeDone === volumeChapters.length ? 'success' : 'brand',
                              }),
                            )
                          : null,
                        h(Button, {
                          variant: 'ghost',
                          size: 'sm',
                          icon: 'arrowUp',
                          'aria-label': t('common.moveUp'),
                          title: t('common.moveUp'),
                          disabled: volumeIndex === 0,
                          onClick: () => moveVolume(volume.id, -1),
                        }),
                        h(Button, {
                          variant: 'ghost',
                          size: 'sm',
                          icon: 'arrowDown',
                          'aria-label': t('common.moveDown'),
                          title: t('common.moveDown'),
                          disabled: volumeIndex === volumes.length - 1,
                          onClick: () => moveVolume(volume.id, 1),
                        }),
                        h(
                          Button,
                          {
                            variant: 'ghost',
                            size: 'sm',
                            icon: 'plus',
                            onClick: () => addChapter(volume.id),
                            'aria-label': t('outline.addChapterInVolume'),
                          },
                          t('common.add'),
                        ),
                      ),
                    ),
                    volumeChapters.length
                      ? h(
                          'div',
                          { className: 'na-chapter-list' },
                          volumeChapters.map((chapter, chapterIndex) =>
                            h(ChapterRow, {
                              key: chapter.id,
                              chapter,
                              number: chapterIndex + 1,
                              selected:
                                selection &&
                                selection.type === 'chapter' &&
                                selection.id === chapter.id,
                              onClick: () => setSelection({ type: 'chapter', id: chapter.id }),
                            }),
                          ),
                        )
                      : h(
                          'div',
                          { className: 'na-act-empty' },
                          h('span', null, t('outline.emptyVolume')),
                          h(
                            Button,
                            {
                              variant: 'ghost',
                              size: 'sm',
                              icon: 'plus',
                              onClick: () => addChapter(volume.id),
                            },
                            t('outline.addChapter'),
                          ),
                        ),
                  );
                }),
                h(
                  'button',
                  {
                    type: 'button',
                    className: 'na-add-volume',
                    onClick: addVolume,
                  },
                  h(Icon, { name: 'plus', size: 15 }),
                  h('span', null, t('outline.addVolume')),
                ),
              )
            : h(
                'div',
                { className: 'na-empty-wrap' },
                h(EmptyState, {
                  icon: 'book',
                  title: t('outline.emptyVolumesTitle'),
                  body: t('outline.emptyVolumesBody'),
                  actionLabel: t('outline.addFirstVolume'),
                  onAction: addVolume,
                }),
              ),
        ),
      );
    }


    function OverviewGraph() {
      const { data, t, tr, setSelection } = useApp();
      const nodes = data.nodes;
      const edges = data.edges;
      const connected = nodes.filter((node) =>
        edges.some((edge) => edge.from === node.id || edge.to === node.id),
      ).length;
      const orphanCount = nodes.length - connected;
      const coverage = nodes.length ? (connected / nodes.length) * 100 : 0;
      return h(
        'div',
        { className: 'na-overview' },
        h('h3', { className: 'na-overview-title' }, t('graph.inspectorTitle')),
        h('p', { className: 'na-overview-body' }, t('graph.inspectorBody')),
        h(
          'div',
          { className: 'na-stat-row' },
          h(StatTile, { label: t('graph.statNodes'), value: formatNumber(nodes.length) }),
          h(StatTile, { label: t('graph.statEdges'), value: formatNumber(edges.length) }),
          h(StatTile, { label: t('graph.statConnected'), value: formatNumber(connected) }),
        ),
        h(
          'section',
          { className: 'na-overview-section' },
          h(
            'div',
            { className: 'na-overview-section-head' },
            h('span', null, t('graph.completeness')),
            h('span', { className: 'na-overview-percent' }, `${Math.round(coverage)}%`),
          ),
          h(ProgressBar, { value: coverage, tone: orphanCount ? 'brand' : 'success' }),
          h(
            'p',
            { className: `na-overview-note ${orphanCount ? 'is-warn' : 'is-ok'}`.trim() },
            orphanCount ? tr('graph.orphans', { n: orphanCount }) : t('graph.noOrphans'),
          ),
        ),
        h(
          'section',
          { className: 'na-overview-section' },
          h('div', { className: 'na-overview-section-head' }, h('span', null, t('graph.legend'))),
          h(
            'div',
            { className: 'na-legend' },
            NODE_KINDS.map((kind) =>
              h(
                'span',
                { key: kind, className: 'na-legend-item' },
                h(KindDot, { kind }),
                nodeKindLabel(t, kind),
              ),
            ),
          ),
        ),
        edges.length
          ? h(
              'section',
              { className: 'na-overview-section' },
              h('div', { className: 'na-overview-section-head' }, h('span', null, t('graph.edgeList'))),
              h(
                'div',
                { className: 'na-overview-edge-list' },
                edges.map((edge) => {
                  const from = data.nodes.find((node) => node.id === edge.from);
                  const to = data.nodes.find((node) => node.id === edge.to);
                  return h(
                    'button',
                    {
                      key: edge.id,
                      type: 'button',
                      className: 'na-overview-edge',
                      onClick: () => setSelection({ type: 'edge', id: edge.id }),
                    },
                    h(
                      'span',
                      { className: 'na-overview-edge-endpoints' },
                      from ? from.title || t('common.untitled') : t('common.empty'),
                      h(Icon, { name: 'arrow', size: 12 }),
                      to ? to.title || t('common.untitled') : t('common.empty'),
                    ),
                    h('span', { className: 'na-overview-edge-label' }, edge.label || t('graph.defaultEdgeLabel')),
                  );
                }),
              ),
            )
          : null,
      );
    }

    function OverviewCharacters() {
      const { data, t, tr } = useApp();
      const characters = data.characters;
      const traits = buildTraitStats(characters);
      const mainCast = characters.filter(
        (character) => character.role === 'protagonist' || character.role === 'deuteragonist',
      ).length;
      const traitTotal = new Set(characters.flatMap((character) => character.traits)).size;
      const roles = CHARACTER_ROLES.map((role) => ({
        role,
        count: characters.filter((character) => character.role === role).length,
      })).filter((entry) => entry.count > 0);
      return h(
        'div',
        { className: 'na-overview' },
        h('h3', { className: 'na-overview-title' }, t('characters.inspectorTitle')),
        h('p', { className: 'na-overview-body' }, t('characters.inspectorBody')),
        h(
          'div',
          { className: 'na-stat-row' },
          h(StatTile, { label: t('characters.statTotal'), value: formatNumber(characters.length) }),
          h(StatTile, { label: t('characters.statMain'), value: formatNumber(mainCast) }),
          h(StatTile, { label: t('characters.statTraits'), value: formatNumber(traitTotal) }),
        ),
        roles.length
          ? h(
              'section',
              { className: 'na-overview-section' },
              h('div', { className: 'na-overview-section-head' }, h('span', null, t('characters.roleMix'))),
              h(
                'div',
                { className: 'na-mix-list' },
                roles.map((entry) =>
                  h(
                    'div',
                    { key: entry.role, className: 'na-mix-row' },
                    h('span', null, roleLabel(t, entry.role)),
                    h(
                      'span',
                      { className: 'na-mix-track' },
                      h('i', {
                        style: { width: `${(entry.count / Math.max(1, characters.length)) * 100}%` },
                      }),
                    ),
                    h('span', { className: 'na-mix-count' }, entry.count),
                  ),
                ),
              ),
            )
          : null,
        traits.length
          ? h(
              'section',
              { className: 'na-overview-section' },
              h('div', { className: 'na-overview-section-head' }, h('span', null, t('characters.highFreq'))),
              h(
                'div',
                { className: 'na-trait-cloud' },
                traits.map(([trait, count]) =>
                  h('span', { key: trait, className: 'na-trait' }, `${trait} · ${count}`),
                ),
              ),
            )
          : null,
      );
    }

    function OverviewOutline() {
      const { data, t, tr } = useApp();
      const volumes = data.outline.volumes;
      const chapters = flattenChapters(volumes);
      const done = chapters.filter((chapter) => chapter.status === 'done').length;
      const target = chapters.reduce((total, chapter) => total + (Number(chapter.wordTarget) || 0), 0);
      const progress = chapters.length ? (done / chapters.length) * 100 : 0;
      return h(
        'div',
        { className: 'na-overview' },
        h('h3', { className: 'na-overview-title' }, t('outline.inspectorTitle')),
        h('p', { className: 'na-overview-body' }, t('outline.inspectorBody')),
        h(
          'div',
          { className: 'na-stat-row' },
          h(StatTile, { label: t('outline.statChapters'), value: formatNumber(chapters.length) }),
          h(StatTile, { label: t('outline.statDone'), value: formatNumber(done) }),
          h(StatTile, { label: t('outline.statTarget'), value: formatNumber(target) }),
        ),
        h(
          'section',
          { className: 'na-overview-section' },
          h(
            'div',
            { className: 'na-overview-section-head' },
            h('span', null, t('outline.overallProgress')),
            h('span', { className: 'na-overview-percent' }, `${Math.round(progress)}%`),
          ),
          h(ProgressBar, { value: progress, tone: progress === 100 ? 'success' : 'brand' }),
        ),
        chapters.length
          ? h(
              'section',
              { className: 'na-overview-section' },
              h('div', { className: 'na-overview-section-head' }, h('span', null, t('outline.statusMix'))),
              h(
                'div',
                { className: 'na-mix-list' },
                CHAPTER_STATUSES.map((status) => {
                  const count = chapters.filter((chapter) => chapter.status === status).length;
                  return h(
                    'div',
                    { key: status, className: 'na-mix-row' },
                    h('span', { className: 'na-status-name', 'data-status': status }, statusLabel(t, status)),
                    h(
                      'span',
                      { className: 'na-mix-track' },
                      h('i', { style: { width: `${(count / Math.max(1, chapters.length)) * 100}%` } }),
                    ),
                    h('span', { className: 'na-mix-count' }, count),
                  );
                }),
              ),
            )
          : null,
        volumes.length
          ? h(
              'section',
              { className: 'na-overview-section' },
              h('div', { className: 'na-overview-section-head' }, h('span', null, t('outline.volumes'))),
              h(
                'div',
                { className: 'na-act-mini-list' },
                volumes.map((volume, index) => {
                  const volumeChapters = Array.isArray(volume.chapters) ? volume.chapters : [];
                  const volumeDone = volumeChapters.filter((chapter) => chapter.status === 'done').length;
                  return h(
                    'div',
                    { key: volume.id, className: 'na-act-mini' },
                    h('span', { className: 'na-act-mini-index' }, String(index + 1)),
                    h(
                      'span',
                      { className: 'na-act-mini-copy' },
                      h(
                        'span',
                        { className: 'na-act-mini-title' },
                        volume.title || tr('outline.volumeFallback', { n: index + 1 }),
                      ),
                      h(ProgressBar, {
                        value: volumeChapters.length
                          ? (volumeDone / volumeChapters.length) * 100
                          : 0,
                        tone:
                          volumeChapters.length && volumeDone === volumeChapters.length
                            ? 'success'
                            : 'brand',
                      }),
                    ),
                    h(
                      'span',
                      { className: 'na-mix-count' },
                      `${volumeDone}/${volumeChapters.length}`,
                    ),
                  );
                }),
              ),
            )
          : null,
      );
    }

    function InspectorOverview({ view }) {
      if (view === 'characters') return h(OverviewCharacters);
      if (view === 'outline') return h(OverviewOutline);
      return h(OverviewGraph);
    }

    function Inspector() {
      const { selection, view, data, setSelection, t, tr } = useApp();
      if (!selection) {
        return h(
          'aside',
          { className: 'na-inspector', 'aria-label': t('inspector.tip') },
          h('div', { className: 'na-inspector-body' }, h(InspectorOverview, { view })),
        );
      }
      let kicker = '';
      let title = '';
      let body = null;
      let typeLabel = '';
      if (selection.type === 'node') {
        const node = data.nodes.find((item) => item.id === selection.id);
        if (!node) return h('aside', { className: 'na-inspector' }, h('div', { className: 'na-inspector-body' }, h(InspectorOverview, { view })));
        typeLabel = t('inspector.node');
        kicker = nodeKindLabel(t, node.kind);
        title = node.title || t('common.untitled');
        body = h(NodeInspector, { key: node.id, node });
      } else if (selection.type === 'edge') {
        const edge = data.edges.find((item) => item.id === selection.id);
        if (!edge) return h('aside', { className: 'na-inspector' }, h('div', { className: 'na-inspector-body' }, h(InspectorOverview, { view })));
        typeLabel = t('inspector.edge');
        kicker = edge.label || t('graph.edgeInspector');
        title = t('graph.edgeInspector');
        body = h(EdgeInspector, { key: edge.id, edge });
      } else if (selection.type === 'character') {
        const character = data.characters.find((item) => item.id === selection.id);
        if (!character) return h('aside', { className: 'na-inspector' }, h('div', { className: 'na-inspector-body' }, h(InspectorOverview, { view })));
        typeLabel = t('inspector.character');
        kicker = roleLabel(t, character.role);
        title = character.name || t('common.untitled');
        body = h(CharacterInspector, { key: character.id, character });
      } else if (selection.type === 'chapter') {
        const location = findChapterLocation(data.outline.volumes, selection.id);
        if (!location) return h('aside', { className: 'na-inspector' }, h('div', { className: 'na-inspector-body' }, h(InspectorOverview, { view })));
        typeLabel = t('inspector.chapter');
        kicker = tr('outline.chapterIndex', { n: location.chapterIndex + 1 });
        title = location.chapter.title || t('outline.untitledChapter');
        body = h(ChapterInspector, {
          key: location.chapter.id,
          chapter: location.chapter,
          volumeId: location.volume.id,
          index: location.chapterIndex + 1,
          volumeLength: location.volume.chapters.length,
        });
      } else if (selection.type === 'volume') {
        const volumeIndex = data.outline.volumes.findIndex((item) => item.id === selection.id);
        const volume = data.outline.volumes[volumeIndex];
        if (!volume) return h('aside', { className: 'na-inspector' }, h('div', { className: 'na-inspector-body' }, h(InspectorOverview, { view })));
        typeLabel = t('inspector.volume');
        kicker = tr('outline.volumeIndex', { n: volumeIndex + 1 });
        title = volume.title || tr('outline.volumeFallback', { n: volumeIndex + 1 });
        body = h(VolumeInspector, { key: volume.id, volume, index: volumeIndex + 1 });
      } else if (selection.type === 'project') {
        typeLabel = t('inspector.project');
        kicker = t('outline.project');
        title = data.project.title || t('outline.projectEmpty');
        body = h(ProjectInspector, { key: 'project' });
      } else {
        return h(
          'aside',
          { className: 'na-inspector' },
          h('div', { className: 'na-inspector-body' }, h(InspectorOverview, { view })),
        );
      }
      return h(
        'aside',
        { className: 'na-inspector', 'aria-label': typeLabel },
        h(
          'header',
          { className: 'na-inspector-head' },
          h(
            'div',
            { className: 'na-inspector-heading' },
            h('span', { className: 'na-inspector-kicker' }, kicker),
            h('h2', { className: 'na-inspector-title', title }, title),
          ),
          h(IconButton, {
            label: t('inspector.close'),
            icon: 'close',
            onClick: () => setSelection(null),
          }),
        ),
        h('div', { className: 'na-inspector-body' }, body),
      );
    }

    function NodeInspector({ node }) {
      const { t, updateNode, removeNode, notify } = useApp();
      const [draft, setDraft] = React.useState({
        title: node.title || '',
        summary: node.summary || '',
        kind: node.kind,
        act: node.act,
        timeStart: String(node.timeStart),
        timeEnd: String(node.timeEnd),
        timeLabel: node.timeLabel || '',
      });
      function patch(key, value) {
        setDraft((previous) => ({ ...previous, [key]: value }));
      }
      function submit(event) {
        event.preventDefault();
        const timeStart = Math.max(0, Number(draft.timeStart) || 0);
        const timeEnd = Math.max(
          timeStart + MIN_DURATION,
          Number(draft.timeEnd) || timeStart + MIN_DURATION,
        );
        updateNode(node.id, {
          ...draft,
          timeStart,
          timeEnd,
          title: draft.title.trim() || t('common.untitled'),
          summary: draft.summary.trim(),
        });
        setDraft((previous) => ({
          ...previous,
          timeStart: String(timeStart),
          timeEnd: String(timeEnd),
        }));
        notify(t('common.savedToast'));
      }
      return h(
        'form',
        { className: 'na-form', onSubmit: submit },
        h(
          Field,
          { label: t('graph.fieldTitle') },
          h(TextInput, {
            value: draft.title,
            required: true,
            placeholder: t('graph.nodeTitlePlaceholder'),
            onChange: (event) => patch('title', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('graph.fieldKind'), plain: true },
          h(Segmented, {
            options: NODE_KINDS.map((kind) => ({ value: kind, label: nodeKindLabel(t, kind) })),
            value: draft.kind,
            label: t('graph.fieldKind'),
            onChange: (value) => patch('kind', value),
          }),
        ),
        h(
          Field,
          { label: t('graph.fieldAct') },
          h(Select, {
            value: draft.act,
            options: ACTS.map((act) => ({ value: act.id, label: t(act.label) })),
            onChange: (event) => patch('act', event.target.value),
          }),
        ),
        h(
          'div',
          { className: 'na-form-grid' },
          h(
            Field,
            { label: t('graph.fieldTimeStart'), hint: t('graph.timeScaleHint') },
            h(TextInput, {
              type: 'number',
              min: 0,
              step: 0.5,
              value: draft.timeStart,
              onChange: (event) => patch('timeStart', event.target.value),
            }),
          ),
          h(
            Field,
            { label: t('graph.fieldTimeEnd') },
            h(TextInput, {
              type: 'number',
              min: 0,
              step: 0.5,
              value: draft.timeEnd,
              onChange: (event) => patch('timeEnd', event.target.value),
            }),
          ),
        ),
        h(
          Field,
          { label: t('graph.fieldTimeLabel'), hint: t('graph.fieldTimeLabelHint') },
          h(TextInput, {
            value: draft.timeLabel,
            placeholder: t('timeline.noTime'),
            onChange: (event) => patch('timeLabel', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('graph.fieldSummary') },
          h(TextArea, {
            rows: 6,
            value: draft.summary,
            placeholder: t('graph.nodeSummaryPlaceholder'),
            onChange: (event) => patch('summary', event.target.value),
          }),
        ),
        h(
          'div',
          { className: 'na-form-actions' },
          h(Button, { type: 'submit', variant: 'primary', icon: 'check' }, t('inspector.save')),
        ),
        h('div', { className: 'na-form-danger' },
          h(DeleteControl, {
            label: t('graph.deleteNode'),
            question: t('graph.deleteNodeConfirm'),
            onConfirm: () => {
              removeNode(node.id);
              notify(t('graph.deleted'));
            },
          }),
        ),
      );
    }

    const RELATION_KEYS = [
      'graph.relation.causes',
      'graph.relation.forces',
      'graph.relation.reveals',
      'graph.relation.blocks',
      'graph.relation.reverses',
      'graph.relation.echoes',
    ];

    function EdgeInspector({ edge }) {
      const { data, t, tr, updateEdge, removeEdge, notify } = useApp();
      const [label, setLabel] = React.useState(edge.label || '');
      const from = data.nodes.find((node) => node.id === edge.from);
      const to = data.nodes.find((node) => node.id === edge.to);
      const fromTitle = from ? from.title || t('common.untitled') : t('common.empty');
      const toTitle = to ? to.title || t('common.untitled') : t('common.empty');
      function submit(event) {
        event.preventDefault();
        updateEdge(edge.id, { label: label.trim() || t('graph.defaultEdgeLabel') });
        notify(t('common.savedToast'));
      }
      return h(
        'form',
        { className: 'na-form', onSubmit: submit },
        h(
          'div',
          { className: 'na-edge-summary' },
          h('span', { className: 'na-edge-endpoint' }, fromTitle),
          h(Icon, { name: 'arrow', size: 16 }),
          h('span', { className: 'na-edge-endpoint' }, toTitle),
        ),
        h('p', { className: 'na-edge-summary-caption' }, tr('graph.edgeSummary', { from: fromTitle, to: toTitle })),
        h(
          Field,
          { label: t('graph.fieldLabel'), hint: t('graph.fieldLabelHint') },
          h(TextInput, {
            value: label,
            placeholder: t('graph.edgeLabelPlaceholder'),
            onChange: (event) => setLabel(event.target.value),
          }),
        ),
        h(
          'div',
          { className: 'na-relation-chips' },
          RELATION_KEYS.map((key) =>
            h(
              'button',
              {
                key,
                type: 'button',
                className: `na-chip ${label === t(key) ? 'is-active' : ''}`.trim(),
                onClick: () => setLabel(t(key)),
              },
              t(key),
            ),
          ),
        ),
        h(
          'div',
          { className: 'na-form-actions' },
          h(Button, { type: 'submit', variant: 'primary', icon: 'check' }, t('inspector.save')),
        ),
        h('div', { className: 'na-form-danger' },
          h(DeleteControl, {
            label: t('graph.deleteEdge'),
            question: t('graph.deleteEdgeConfirm'),
            onConfirm: () => {
              removeEdge(edge.id);
              notify(t('graph.edgeDeleted'));
            },
          }),
        ),
      );
    }

    function CharacterInspector({ character }) {
      const { t, updateCharacter, removeCharacter, notify } = useApp();
      const [draft, setDraft] = React.useState({
        name: character.name || '',
        role: character.role,
        birthDate: character.birthDate || '',
        oneLine: character.oneLine || '',
        traitsText: character.traits.join('、'),
        goal: character.goal || '',
        conflict: character.conflict || '',
        arc: character.arc || '',
        notes: character.notes || '',
        accent: character.accent,
      });
      function patch(key, value) {
        setDraft((previous) => ({ ...previous, [key]: value }));
      }
      function submit(event) {
        event.preventDefault();
        updateCharacter(character.id, {
          name: draft.name.trim() || t('characters.newName'),
          role: draft.role,
          birthDate: normalizeBirthDate(draft.birthDate),
          oneLine: draft.oneLine.trim(),
          traits: asTextArray(draft.traitsText),
          goal: draft.goal.trim(),
          conflict: draft.conflict.trim(),
          arc: draft.arc.trim(),
          notes: draft.notes.trim(),
          accent: draft.accent,
        });
        notify(t('common.savedToast'));
      }
      return h(
        'form',
        { className: 'na-form', onSubmit: submit },
        h(
          Field,
          { label: t('characters.name') },
          h(TextInput, {
            value: draft.name,
            required: true,
            placeholder: t('characters.namePlaceholder'),
            onChange: (event) => patch('name', event.target.value),
          }),
        ),
        h(
          'div',
          { className: 'na-form-grid' },
          h(
            Field,
            { label: t('characters.role') },
            h(Select, {
              value: draft.role,
              options: CHARACTER_ROLES.map((role) => ({ value: role, label: roleLabel(t, role) })),
              onChange: (event) => patch('role', event.target.value),
            }),
          ),
          h(
            Field,
            { label: t('characters.birthDate') },
            h(TextInput, {
              type: 'date',
              value: draft.birthDate,
              onChange: (event) => patch('birthDate', event.target.value),
            }),
          ),
        ),
        h(
          Field,
          { label: t('characters.oneLine') },
          h(TextInput, {
            value: draft.oneLine,
            placeholder: t('characters.oneLinePlaceholder'),
            onChange: (event) => patch('oneLine', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('characters.traitsField'), hint: t('characters.traitsHint') },
          h(TextInput, {
            value: draft.traitsText,
            placeholder: t('characters.traitsHint'),
            onChange: (event) => patch('traitsText', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('characters.goalField') },
          h(TextArea, {
            rows: 3,
            value: draft.goal,
            placeholder: t('characters.goalPlaceholder'),
            onChange: (event) => patch('goal', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('characters.conflictField') },
          h(TextArea, {
            rows: 3,
            value: draft.conflict,
            placeholder: t('characters.conflictPlaceholder'),
            onChange: (event) => patch('conflict', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('characters.arcField') },
          h(TextArea, {
            rows: 3,
            value: draft.arc,
            placeholder: t('characters.arcPlaceholder'),
            onChange: (event) => patch('arc', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('characters.notes') },
          h(TextArea, {
            rows: 4,
            value: draft.notes,
            placeholder: t('characters.notesPlaceholder'),
            onChange: (event) => patch('notes', event.target.value),
          }),
        ),
        h(
          'div',
          { className: 'na-field' },
          h('span', { className: 'na-field-label' }, t('characters.accent')),
          h(
            'div',
            { className: 'na-swatches' },
            ACCENTS.map((color) =>
              h('button', {
                key: color,
                type: 'button',
                className: `na-swatch ${draft.accent === color ? 'is-active' : ''}`.trim(),
                style: { '--na-swatch': color },
                'aria-label': `${t('characters.accent')} ${color}`,
                'aria-pressed': draft.accent === color,
                onClick: () => patch('accent', color),
              }),
            ),
          ),
        ),
        h(
          'div',
          { className: 'na-form-actions' },
          h(Button, { type: 'submit', variant: 'primary', icon: 'check' }, t('inspector.save')),
        ),
        h('div', { className: 'na-form-danger' },
          h(DeleteControl, {
            label: t('common.delete'),
            question: t('characters.deleteConfirm'),
            onConfirm: () => {
              removeCharacter(character.id);
              notify(t('characters.deleted'));
            },
          }),
        ),
      );
    }

    function VolumeInspector({ volume, index }) {
      const { t, tr, updateVolume, removeVolume, notify } = useApp();
      const [draft, setDraft] = React.useState({
        title: volume.title || '',
        summary: volume.summary || '',
      });
      function patch(key, value) {
        setDraft((previous) => ({ ...previous, [key]: value }));
      }
      function submit(event) {
        event.preventDefault();
        updateVolume(volume.id, {
          title: draft.title.trim(),
          summary: draft.summary.trim(),
        });
        notify(t('outline.volumeSaved'));
      }
      return h(
        'form',
        { className: 'na-form', onSubmit: submit },
        h(
          Field,
          { label: t('outline.volumeTitle') },
          h(TextInput, {
            value: draft.title,
            placeholder: tr('outline.volumeFallback', { n: index }),
            onChange: (event) => patch('title', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('outline.volumeSummary') },
          h(TextArea, {
            rows: 7,
            value: draft.summary,
            placeholder: t('outline.volumeSummaryPlaceholder'),
            onChange: (event) => patch('summary', event.target.value),
          }),
        ),
        h(
          'p',
          { className: 'na-form-note' },
          tr('outline.volumeChapterCount', {
            n: (volume.chapters || []).length,
          }),
        ),
        h(
          'div',
          { className: 'na-form-actions' },
          h(Button, { type: 'submit', variant: 'primary', icon: 'check' }, t('inspector.save')),
        ),
        h('div', { className: 'na-form-danger' },
          h(DeleteControl, {
            label: t('outline.deleteVolume'),
            question: t('outline.deleteVolumeConfirm'),
            onConfirm: () => {
              removeVolume(volume.id);
              notify(t('outline.volumeDeleted'));
            },
          }),
        ),
      );
    }

    function ChapterInspector({ chapter, volumeId, index, volumeLength }) {
      const { data, t, tr, updateChapter, removeChapter, moveChapter, notify } = useApp();
      const [draft, setDraft] = React.useState({
        title: chapter.title || '',
        volumeId,
        status: chapter.status,
        summary: chapter.summary || '',
        beatsText: chapter.beats.join('\n'),
        pov: chapter.pov || '',
        wordTarget: chapter.wordTarget ? String(chapter.wordTarget) : '',
      });
      function patch(key, value) {
        setDraft((previous) => ({ ...previous, [key]: value }));
      }
      function submit(event) {
        event.preventDefault();
        updateChapter(
          volumeId,
          chapter.id,
          {
            title: draft.title.trim() || t('outline.untitledChapter'),
            status: draft.status,
            summary: draft.summary.trim(),
            beats: draft.beatsText
              .split('\n')
              .map((beat) => beat.trim())
              .filter(Boolean),
            pov: draft.pov.trim(),
            wordTarget: Math.max(0, Math.round(Number(draft.wordTarget) || 0)),
          },
          draft.volumeId,
        );
        notify(t('common.savedToast'));
      }
      return h(
        'form',
        { className: 'na-form', onSubmit: submit },
        h(
          Field,
          { label: t('outline.chapterTitle') },
          h(TextInput, {
            value: draft.title,
            required: true,
            placeholder: t('outline.newTitle'),
            onChange: (event) => patch('title', event.target.value),
          }),
        ),
        h(
          'div',
          { className: 'na-form-grid' },
          h(
            Field,
            { label: t('outline.chapterVolume') },
            h(Select, {
              value: draft.volumeId,
              options: data.outline.volumes.map((volume, volumeIndex) => ({
                value: volume.id,
                label: volume.title || tr('outline.volumeFallback', { n: volumeIndex + 1 }),
              })),
              onChange: (event) => patch('volumeId', event.target.value),
            }),
          ),
          h(
            Field,
            { label: t('outline.chapterPov') },
            h(TextInput, {
              value: draft.pov,
              placeholder: t('outline.noPov'),
              onChange: (event) => patch('pov', event.target.value),
            }),
          ),
        ),
        h(
          Field,
          { label: t('outline.chapterStatus'), plain: true },
          h(Segmented, {
            options: CHAPTER_STATUSES.map((status) => ({ value: status, label: statusLabel(t, status) })),
            value: draft.status,
            label: t('outline.chapterStatus'),
            onChange: (value) => patch('status', value),
          }),
        ),
        h(
          Field,
          { label: t('outline.chapterTarget') },
          h(TextInput, {
            type: 'number',
            min: 0,
            step: 100,
            value: draft.wordTarget,
            placeholder: t('outline.wordTargetPlaceholder'),
            onChange: (event) => patch('wordTarget', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('outline.chapterSummary') },
          h(TextArea, {
            rows: 5,
            value: draft.summary,
            placeholder: t('outline.newSummary'),
            onChange: (event) => patch('summary', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('outline.chapterBeats'), hint: t('outline.beatsHint') },
          h(TextArea, {
            rows: 5,
            value: draft.beatsText,
            placeholder: t('outline.beatsHint'),
            onChange: (event) => patch('beatsText', event.target.value),
          }),
        ),
        h('p', { className: 'na-form-note' }, tr('outline.chapterIndex', { n: index })),
        h(
          'div',
          { className: 'na-order-actions' },
          h(
            Button,
            {
              variant: 'ghost',
              size: 'sm',
              icon: 'arrowUp',
              disabled: index <= 1,
              onClick: () => moveChapter(volumeId, chapter.id, -1),
            },
            t('common.moveUp'),
          ),
          h(
            Button,
            {
              variant: 'ghost',
              size: 'sm',
              icon: 'arrowDown',
              disabled: index >= volumeLength,
              onClick: () => moveChapter(volumeId, chapter.id, 1),
            },
            t('common.moveDown'),
          ),
        ),
        h(
          'div',
          { className: 'na-form-actions' },
          h(Button, { type: 'submit', variant: 'primary', icon: 'check' }, t('inspector.save')),
        ),
        h('div', { className: 'na-form-danger' },
          h(DeleteControl, {
            label: t('common.delete'),
            question: t('outline.deleteConfirm'),
            onConfirm: () => {
              removeChapter(volumeId, chapter.id);
              notify(t('outline.deleted'));
            },
          }),
        ),
      );
    }

    function ProjectInspector() {
      const { data, t, updateProject, notify, projects, activeProjectId, deleteProject } = useApp();
      const [draft, setDraft] = React.useState({
        title: data.project.title || '',
        genre: data.project.genre || '',
        logline: data.project.logline || '',
        synopsis: data.project.synopsis || '',
      });
      function patch(key, value) {
        setDraft((previous) => ({ ...previous, [key]: value }));
      }
      function submit(event) {
        event.preventDefault();
        updateProject({
          title: draft.title.trim() || t('outline.projectEmpty'),
          genre: draft.genre.trim(),
          logline: draft.logline.trim(),
          synopsis: draft.synopsis.trim(),
        });
        notify(t('outline.projectSaved'));
      }
      return h(
        'form',
        { className: 'na-form', onSubmit: submit },
        h(
          Field,
          { label: t('outline.projectTitle') },
          h(TextInput, {
            value: draft.title,
            required: true,
            placeholder: t('outline.projectTitlePlaceholder'),
            onChange: (event) => patch('title', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('outline.projectGenre') },
          h(TextInput, {
            value: draft.genre,
            placeholder: t('outline.projectGenrePlaceholder'),
            onChange: (event) => patch('genre', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('outline.projectLogline') },
          h(TextArea, {
            rows: 3,
            value: draft.logline,
            placeholder: t('outline.projectLoglinePlaceholder'),
            onChange: (event) => patch('logline', event.target.value),
          }),
        ),
        h(
          Field,
          { label: t('outline.projectSynopsis') },
          h(TextArea, {
            rows: 9,
            value: draft.synopsis,
            placeholder: t('outline.projectSynopsisPlaceholder'),
            onChange: (event) => patch('synopsis', event.target.value),
          }),
        ),
        h(
          'div',
          { className: 'na-form-actions' },
          h(Button, { type: 'submit', variant: 'primary', icon: 'check' }, t('inspector.save')),
        ),
        projects.length > 1
          ? h(
              'div',
              { className: 'na-form-danger' },
              h(DeleteControl, {
                label: t('app.deleteProject'),
                question: t('app.deleteProjectConfirm'),
                onConfirm: () => deleteProject(activeProjectId),
              }),
            )
          : null,
      );
    }

    function ProjectDialog({ onClose }) {
      const {
        projects,
        activeProjectId,
        t,
        tr,
        createProject,
        selectProject,
        setSelection,
      } = useApp();
      const [mode, setMode] = React.useState('list');
      const [draft, setDraft] = React.useState({ title: '', genre: '', logline: '' });
      const orderedProjects = projects.slice().sort((left, right) => {
        if (left.id === activeProjectId) return -1;
        if (right.id === activeProjectId) return 1;
        return (Number(right.updatedAt) || 0) - (Number(left.updatedAt) || 0);
      });

      React.useEffect(() => {
        function handleKey(event) {
          if (event.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
      }, [onClose]);

      function patch(key, value) {
        setDraft((previous) => ({ ...previous, [key]: value }));
      }

      function submit(event) {
        event.preventDefault();
        createProject(draft);
      }

      return h(
        'div',
        {
          className: 'na-dialog-backdrop',
          onMouseDown: (event) => {
            if (event.target === event.currentTarget) onClose();
          },
        },
        h(
          'div',
          {
            className: 'na-dialog',
            role: 'dialog',
            'aria-modal': true,
            'aria-labelledby': 'na-project-dialog-title',
          },
          h(
            'header',
            { className: 'na-dialog-head' },
            h(
              'div',
              { className: 'na-dialog-heading' },
              h(
                'span',
                { className: 'na-kicker' },
                mode === 'create' ? t('app.newProjectTitle') : t('app.projects'),
              ),
              h(
                'h2',
                { id: 'na-project-dialog-title', className: 'na-dialog-title' },
                mode === 'create' ? t('app.newProjectTitle') : t('app.projects'),
              ),
              h(
                'p',
                { className: 'na-dialog-subtitle' },
                mode === 'create' ? t('app.newProjectSubtitle') : t('app.projectLibraryDescription'),
              ),
            ),
            h(IconButton, { label: t('common.close'), icon: 'close', onClick: onClose }),
          ),
          h(
            'div',
            { className: 'na-dialog-body' },
            mode === 'create'
              ? h(
                  'form',
                  { className: 'na-form', onSubmit: submit },
                  h(
                    Field,
                    { label: t('app.projectTitleLabel') },
                    h(TextInput, {
                      value: draft.title,
                      required: true,
                      autoFocus: true,
                      placeholder: t('app.projectTitlePlaceholder'),
                      onChange: (event) => patch('title', event.target.value),
                    }),
                  ),
                  h(
                    Field,
                    { label: t('app.projectGenreLabel') },
                    h(TextInput, {
                      value: draft.genre,
                      placeholder: t('app.projectGenrePlaceholder'),
                      onChange: (event) => patch('genre', event.target.value),
                    }),
                  ),
                  h(
                    Field,
                    { label: t('app.projectLoglineLabel') },
                    h(TextArea, {
                      rows: 4,
                      value: draft.logline,
                      placeholder: t('app.projectLoglinePlaceholder'),
                      onChange: (event) => patch('logline', event.target.value),
                    }),
                  ),
                  h(
                    'div',
                    { className: 'na-dialog-actions' },
                    h(
                      Button,
                      { variant: 'ghost', onClick: () => setMode('list') },
                      t('app.backToProjects'),
                    ),
                    h(
                      Button,
                      { type: 'submit', variant: 'primary', icon: 'plus' },
                      t('app.createProject'),
                    ),
                  ),
                )
              : h(
                  'div',
                  { className: 'na-project-library' },
                  h(
                    'div',
                    { className: 'na-project-library-bar' },
                    h('span', { className: 'na-project-count' }, tr('app.projectCount', { n: projects.length })),
                    h(
                      Button,
                      { variant: 'primary', icon: 'plus', onClick: () => setMode('create') },
                      t('app.newProject'),
                    ),
                  ),
                  h(
                    'div',
                    { className: 'na-project-list' },
                    orderedProjects.map((project) => {
                      const active = project.id === activeProjectId;
                      return h(
                        'div',
                        {
                          key: project.id,
                          className: `na-project-row ${active ? 'is-active' : ''}`.trim(),
                        },
                        h(
                          'button',
                          {
                            type: 'button',
                            className: 'na-project-row-main',
                            onClick: () => selectProject(project.id),
                          },
                          h(
                            'span',
                            { className: 'na-project-row-top' },
                            h(
                              'span',
                              { className: 'na-project-row-title' },
                              project.title || t('app.projectFallback'),
                            ),
                            active
                              ? h('span', { className: 'na-project-badge' }, t('app.activeProject'))
                              : null,
                          ),
                          h(
                            'span',
                            { className: 'na-project-row-meta' },
                            project.genre || t('app.noGenre'),
                            ' · ',
                            tr('app.projectMeta', {
                              nodes: project.nodes.length,
                              chapters: flattenChapters(project.outline.volumes).length,
                            }),
                          ),
                        ),
                        active
                          ? h(
                              'span',
                              { className: 'na-project-check', 'aria-hidden': true },
                              h(Icon, { name: 'check', size: 15 }),
                            )
                          : null,
                      );
                    }),
                  ),
                  h(
                    'div',
                    { className: 'na-dialog-actions' },
                    h(
                      Button,
                      {
                        variant: 'ghost',
                        icon: 'book',
                        onClick: () => {
                          onClose();
                          setSelection({ type: 'project' });
                        },
                      },
                      t('app.editCurrentProject'),
                    ),
                  ),
                ),
          ),
        ),
      );
    }

    function findFreeNodePosition(nodes) {
      const lastEnd = nodes.reduce(
        (maximum, node) => Math.max(maximum, Number(node.timeEnd) || 0),
        0,
      );
      const timeStart = lastEnd + 1;
      return {
        timeStart,
        timeEnd: timeStart + MIN_DURATION,
        y: 70 + (nodes.length % 3) * 190,
      };
    }

    function NovelApp({ t, locale }) {
      useLocaleRevision(locale);
      const [library, setLibrary] = React.useState(loadStoredLibrary);
      const [view, setView] = React.useState('graph');
      const [selection, setSelection] = React.useState(null);
      const [notice, setNotice] = React.useState(null);
      const [storageOk, setStorageOk] = React.useState(true);
      const [projectDialog, setProjectDialog] = React.useState(false);
      const noticeTimer = React.useRef(null);
      const fileInputRef = React.useRef(null);
      const activeProject =
        library.projects.find((project) => project.id === library.activeProjectId) || library.projects[0];
      const data = React.useMemo(() => projectView(activeProject), [activeProject]);
      const setData = React.useCallback((updater) => {
        setLibrary((previous) => {
          const current =
            previous.projects.find((project) => project.id === previous.activeProjectId) ||
            previous.projects[0];
          if (!current) return previous;
          const previousView = projectView(current);
          const nextView = typeof updater === 'function' ? updater(previousView) : updater;
          if (!nextView) return previous;
          const updated = mergeProjectView(current, nextView);
          return {
            ...previous,
            projects: previous.projects.map((project) =>
              project.id === current.id ? updated : project,
            ),
          };
        });
      }, []);

      React.useEffect(() => {
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
          setStorageOk(true);
        } catch {
          setStorageOk(false);
        }
      }, [library]);

      React.useEffect(() => {
        return () => {
          if (noticeTimer.current) window.clearTimeout(noticeTimer.current);
        };
      }, []);

      function tr(key, vars) {
        return format(t(key), vars);
      }

      function showNotice(text, tone) {
        if (noticeTimer.current) window.clearTimeout(noticeTimer.current);
        setNotice({ text, tone: tone || 'success', key: Date.now() });
        noticeTimer.current = window.setTimeout(() => setNotice(null), 3200);
      }

      function updateNode(id, patch) {
        setData((previous) => ({
          ...previous,
          nodes: previous.nodes.map((node) => (node.id === id ? { ...node, ...patch } : node)),
        }));
      }

      function removeNode(id) {
        setData((previous) => ({
          ...previous,
          nodes: previous.nodes.filter((node) => node.id !== id),
          edges: previous.edges.filter((edge) => edge.from !== id && edge.to !== id),
        }));
        setSelection(null);
      }

      function addNode() {
        const id = uid('node');
        setData((previous) => {
          const position = findFreeNodePosition(previous.nodes);
          return {
            ...previous,
            nodes: [
              ...previous.nodes,
              {
                id,
                title: t('graph.newTitle'),
                summary: t('graph.newSummary'),
                kind: 'setup',
                act: 'act1',
                y: position.y,
                timeStart: position.timeStart,
                timeEnd: position.timeEnd,
                timeLabel: '',
              },
            ],
          };
        });
        setView('graph');
        setSelection({ type: 'node', id });
        showNotice(t('graph.added'));
      }

      function updateEdge(id, patch) {
        setData((previous) => ({
          ...previous,
          edges: previous.edges.map((edge) => (edge.id === id ? { ...edge, ...patch } : edge)),
        }));
      }

      function removeEdge(id) {
        setData((previous) => ({
          ...previous,
          edges: previous.edges.filter((edge) => edge.id !== id),
        }));
        setSelection(null);
      }

      function addCharacter() {
        const id = uid('character');
        setData((previous) => ({
          ...previous,
          characters: [
            ...previous.characters,
            {
              id,
              name: t('characters.newName'),
              role: 'supporting',
              birthDate: '',
              oneLine: '',
              traits: [],
              goal: '',
              conflict: '',
              arc: '',
              notes: '',
              accent: ACCENTS[previous.characters.length % ACCENTS.length],
            },
          ],
        }));
        setView('characters');
        setSelection({ type: 'character', id });
        showNotice(t('characters.added'));
      }

      function updateCharacter(id, patch) {
        setData((previous) => ({
          ...previous,
          characters: previous.characters.map((character) =>
            character.id === id ? { ...character, ...patch } : character,
          ),
        }));
      }

      function removeCharacter(id) {
        setData((previous) => ({
          ...previous,
          characters: previous.characters.filter((character) => character.id !== id),
        }));
        setSelection(null);
      }

      function addVolume() {
        const id = uid('volume');
        const volume = {
          id,
          title: '',
          summary: '',
          chapters: [],
        };
        setData((previous) => ({
          ...previous,
          outline: { volumes: [...previous.outline.volumes, volume] },
        }));
        setView('outline');
        setSelection({ type: 'volume', id });
        showNotice(t('outline.volumeAdded'));
      }

      function updateVolume(id, patch) {
        setData((previous) => ({
          ...previous,
          outline: {
            volumes: previous.outline.volumes.map((volume) =>
              volume.id === id ? { ...volume, ...patch } : volume,
            ),
          },
        }));
      }

      function removeVolume(id) {
        setData((previous) => ({
          ...previous,
          outline: {
            volumes: previous.outline.volumes.filter((volume) => volume.id !== id),
          },
        }));
        setSelection(null);
      }

      function moveVolume(id, delta) {
        setData((previous) => {
          const volumes = previous.outline.volumes.slice();
          const index = volumes.findIndex((volume) => volume.id === id);
          const target = index + delta;
          if (index < 0 || target < 0 || target >= volumes.length) return previous;
          const [moved] = volumes.splice(index, 1);
          volumes.splice(target, 0, moved);
          return { ...previous, outline: { volumes } };
        });
      }

      function addChapter(volumeId) {
        const id = uid('chapter');
        const nextChapter = {
          id,
          title: t('outline.newTitle'),
          status: 'idea',
          summary: t('outline.newSummary'),
          beats: [],
          pov: '',
          wordTarget: 3000,
        };
        setData((previous) => ({
          ...previous,
          outline: {
            volumes: previous.outline.volumes.map((volume) =>
              volume.id === volumeId
                ? { ...volume, chapters: [...(volume.chapters || []), nextChapter] }
                : volume,
            ),
          },
        }));
        setView('outline');
        setSelection({ type: 'chapter', id });
        showNotice(t('outline.added'));
      }

      function updateChapter(volumeId, chapterId, patch, targetVolumeId) {
        setData((previous) => {
          const volumes = previous.outline.volumes.map((volume) => ({
            ...volume,
            chapters: Array.isArray(volume.chapters) ? volume.chapters.slice() : [],
          }));
          let source = null;
          let sourceIndex = -1;
          volumes.forEach((volume) => {
            if (source) return;
            const index = volume.chapters.findIndex((chapter) => chapter.id === chapterId);
            if (index >= 0) {
              source = volume;
              sourceIndex = index;
            }
          });
          if (!source) return previous;
          const chapter = { ...source.chapters[sourceIndex], ...patch };
          source.chapters.splice(sourceIndex, 1);
          const target =
            volumes.find((volume) => volume.id === (targetVolumeId || volumeId)) || source;
          const insertAt =
            target === source ? sourceIndex : Math.min(sourceIndex, target.chapters.length);
          target.chapters.splice(insertAt, 0, chapter);
          return { ...previous, outline: { volumes } };
        });
      }

      function removeChapter(volumeId, chapterId) {
        setData((previous) => ({
          ...previous,
          outline: {
            volumes: previous.outline.volumes.map((volume) =>
              volume.id === volumeId
                ? {
                    ...volume,
                    chapters: (volume.chapters || []).filter((chapter) => chapter.id !== chapterId),
                  }
                : volume,
            ),
          },
        }));
        setSelection(null);
      }

      function moveChapter(volumeId, chapterId, delta) {
        setData((previous) => {
          const volumes = previous.outline.volumes.map((volume) => ({
            ...volume,
            chapters: Array.isArray(volume.chapters) ? volume.chapters.slice() : [],
          }));
          const volume = volumes.find((item) => item.id === volumeId);
          if (!volume) return previous;
          const index = volume.chapters.findIndex((chapter) => chapter.id === chapterId);
          const target = index + delta;
          if (index < 0 || target < 0 || target >= volume.chapters.length) return previous;
          const [moved] = volume.chapters.splice(index, 1);
          volume.chapters.splice(target, 0, moved);
          return { ...previous, outline: { volumes } };
        });
      }

      function updateProject(patch) {
        setData((previous) => ({ ...previous, project: { ...previous.project, ...patch } }));
      }

      function selectProject(id) {
        setLibrary((previous) => {
          if (!previous.projects.some((project) => project.id === id)) return previous;
          return { ...previous, activeProjectId: id };
        });
        setProjectDialog(false);
        setSelection(null);
      }

      function createProject(input) {
        const now = Date.now();
        const id = uid('project');
        const project = {
          id,
          title: asString(input && input.title, '').trim() || t('app.projectFallback'),
          genre: asString(input && input.genre, '').trim(),
          logline: asString(input && input.logline, '').trim(),
          synopsis: '',
          nodes: [],
          edges: [],
          characters: [],
          outline: { volumes: [] },
          createdAt: now,
          updatedAt: now,
        };
        setLibrary((previous) => ({
          ...previous,
          activeProjectId: id,
          projects: [...previous.projects, project],
        }));
        setProjectDialog(false);
        setView('graph');
        setSelection(null);
        showNotice(t('app.projectCreated'));
      }

      function deleteProject(id) {
        setLibrary((previous) => {
          if (previous.projects.length <= 1) return previous;
          const projects = previous.projects.filter((project) => project.id !== id);
          if (projects.length === previous.projects.length) return previous;
          return {
            ...previous,
            projects,
            activeProjectId:
              previous.activeProjectId === id ? projects[0].id : previous.activeProjectId,
          };
        });
        setProjectDialog(false);
        setSelection(null);
        showNotice(t('app.projectDeleted'));
      }

      function exportData() {
        try {
          const blob = new Blob([JSON.stringify(library, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const anchor = document.createElement('a');
          anchor.href = url;
          anchor.download = exportFileName(data.project.title);
          anchor.click();
          window.setTimeout(() => URL.revokeObjectURL(url), 800);
          showNotice(t('app.exported'));
        } catch {
          showNotice(t('app.saveFailed'), 'error');
        }
      }

      async function importData(event) {
        const file = event.target.files && event.target.files[0];
        event.target.value = '';
        if (!file) return;
        try {
          const parsed = JSON.parse(await file.text());
          const nextLibrary = normalizeLibrary(parsed);
          if (!nextLibrary) throw new Error('invalid');
          setLibrary(nextLibrary);
          setProjectDialog(false);
          setSelection(null);
          setView('graph');
          showNotice(t('app.imported'));
        } catch {
          showNotice(t('app.importFailed'), 'error');
        }
      }

      function selectTab(nextView) {
        setView(nextView);
        setSelection(null);
      }

      const projectTitle = data.project.title || t('app.projectFallback');
      const tabs = [
        { id: 'graph', label: t('tab.graph'), hint: t('tab.graphHint'), icon: 'graph', count: data.nodes.length },
        {
          id: 'characters',
          label: t('tab.characters'),
          hint: t('tab.charactersHint'),
          icon: 'users',
          count: data.characters.length,
        },
        {
          id: 'outline',
          label: t('tab.outline'),
          hint: t('tab.outlineHint'),
          icon: 'book',
          count: flattenChapters(data.outline.volumes).length,
        },
      ];
      const page = view === 'characters' ? h(CharacterPage) : view === 'outline' ? h(OutlinePage) : h(GraphPage);
      const contextValue = {
        data,
        setData,
        view,
        setView,
        selection,
        setSelection,
        t,
        tr,
        notify: showNotice,
        projects: library.projects,
        activeProjectId: library.activeProjectId,
        setProjectDialog,
        selectProject,
        createProject,
        deleteProject,
        addNode,
        addCharacter,
        addVolume,
        addChapter,
        updateNode,
        removeNode,
        updateEdge,
        removeEdge,
        updateCharacter,
        removeCharacter,
        updateVolume,
        removeVolume,
        moveVolume,
        updateChapter,
        removeChapter,
        moveChapter,
        updateProject,
      };

      return h(
        AppContext.Provider,
        { value: contextValue },
        h(
          'div',
          { className: 'na-root' },
          h('style', { key: 'novel-assistant-styles' }, CSS),
          h(
            'header',
            { className: 'na-header' },
            h(
              'div',
              { className: 'na-header-left' },
              h(BrandMark),
              h(
                'div',
                { className: 'na-heading' },
                h('span', { className: 'na-kicker' }, t('app.kicker')),
                h(
                  'div',
                  { className: 'na-title-line' },
                  h('h1', null, t('app.title')),
                  h(
                    'button',
                    {
                      type: 'button',
                      className: 'na-project-pill',
                      title: t('app.switchProject'),
                      'aria-label': t('app.switchProject'),
                      onClick: () => setProjectDialog(true),
                    },
                    h('span', { className: 'na-project-pill-text' }, projectTitle),
                    h(Icon, { name: 'chevronDown', size: 12 }),
                  ),
                ),
              ),
            ),
            h(
              'div',
              { className: 'na-header-actions' },
              h(
                Button,
                {
                  variant: 'ghost',
                  icon: 'book',
                  onClick: () => setProjectDialog(true),
                },
                t('app.projects'),
              ),
              h(IconButton, {
                label: t('app.export'),
                icon: 'download',
                onClick: exportData,
              }),
              h(IconButton, {
                label: t('app.import'),
                icon: 'upload',
                onClick: () => fileInputRef.current && fileInputRef.current.click(),
              }),
              h('input', {
                ref: fileInputRef,
                type: 'file',
                accept: 'application/json,.json',
                className: 'na-file-input',
                onChange: importData,
              }),
            ),
          ),
          h(
            'div',
            { className: 'na-tabbar' },
            h(
              'nav',
              { className: 'na-tabs', role: 'tablist', 'aria-label': t('app.title') },
              tabs.map((tab) =>
                h(
                  'button',
                  {
                    key: tab.id,
                    id: `na-tab-${tab.id}`,
                    type: 'button',
                    role: 'tab',
                    'aria-selected': view === tab.id,
                    'aria-controls': `na-panel-${tab.id}`,
                    tabIndex: view === tab.id ? 0 : -1,
                    className: `na-tab ${view === tab.id ? 'is-active' : ''}`.trim(),
                    title: tab.hint,
                    onClick: () => selectTab(tab.id),
                  },
                  h(Icon, { name: tab.icon, size: 17 }),
                  h('span', { className: 'na-tab-label' }, tab.label),
                  h('span', { className: 'na-tab-count' }, tab.count),
                ),
              ),
            ),
            h(
              'div',
              {
                className: `na-save-state ${storageOk ? 'is-ok' : 'is-warn'}`.trim(),
                title: t('app.localOnly'),
              },
              h('span', { className: 'na-save-dot', 'aria-hidden': true }),
              h('span', { className: 'na-save-text' }, storageOk ? t('app.autoSaved') : t('app.saveFailed')),
            ),
          ),
          h(
            'div',
            { className: `na-workspace ${selection ? 'na-has-selection' : ''}`.trim() },
            h(
              'div',
              {
                className: 'na-main',
                id: `na-panel-${view}`,
                role: 'tabpanel',
                'aria-labelledby': `na-tab-${view}`,
              },
              page,
            ),
            h(Inspector),
          ),
          projectDialog ? h(ProjectDialog, { onClose: () => setProjectDialog(false) }) : null,
          notice
            ? h(
                'div',
                {
                  key: notice.key,
                  className: `na-toast is-${notice.tone}`.trim(),
                  role: notice.tone === 'error' ? 'alert' : 'status',
                },
                h(Icon, { name: notice.tone === 'error' ? 'alert' : 'check', size: 16 }),
                h('span', null, notice.text),
              )
            : null,
        ),
      );
    }

    let CSS = `
      .na-root {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
        overflow: hidden;
        background: var(--dsw-alias-bg-base);
        color: var(--dsw-alias-label-primary);
        font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, -apple-system, sans-serif;
        font-size: 14px;
        line-height: 1.45;
        -webkit-font-smoothing: antialiased;
      }
      .na-root *,
      .na-root *::before,
      .na-root *::after {
        box-sizing: border-box;
      }
      .na-root button,
      .na-root input,
      .na-root textarea,
      .na-root select {
        font: inherit;
        color: inherit;
      }
      .na-root button {
        cursor: pointer;
      }
      .na-root button:disabled {
        cursor: not-allowed;
        opacity: 0.55;
      }
      .na-root :focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary);
        outline-offset: 2px;
      }
      .na-root ::selection {
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 24%, transparent);
      }
      .na-root ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      .na-root ::-webkit-scrollbar-thumb {
        background: color-mix(in srgb, var(--dsw-alias-border-l2) 82%, transparent);
        border: 3px solid transparent;
        border-radius: 99px;
        background-clip: padding-box;
      }
      .na-root ::-webkit-scrollbar-track {
        background: transparent;
      }
      .na-icon {
        display: block;
        flex: none;
      }
      .na-panel-icon {
        display: block;
        opacity: 0.78;
        transition: opacity 0.16s ease;
      }
      .na-panel-icon[data-active="true"] {
        opacity: 1;
      }
      .na-file-input {
        display: none;
      }
      .na-kicker {
        display: block;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        font-weight: 650;
        letter-spacing: 0.19em;
        line-height: 1.2;
        text-transform: uppercase;
      }

      .na-header {
        display: flex;
        flex: none;
        align-items: center;
        justify-content: space-between;
        gap: 22px;
        padding: 17px 26px 14px;
        border-bottom: 1px solid var(--dsw-alias-border-l1);
        background: var(--dsw-alias-bg-base);
      }
      .na-header-left {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }
      .na-brand-mark {
        display: grid;
        flex: none;
        width: 38px;
        height: 38px;
        place-items: center;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 32%, var(--dsw-alias-border-l1));
        border-radius: 11px;
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 11%, var(--dsw-alias-bg-layer-1));
        color: var(--dsw-alias-brand-primary);
      }
      .na-heading {
        min-width: 0;
      }
      .na-title-line {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
        margin-top: 4px;
      }
      .na-title-line h1 {
        margin: 0;
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 19px;
        font-weight: 650;
        letter-spacing: 0.015em;
        line-height: 1.1;
        white-space: nowrap;
      }
      .na-project-pill {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        max-width: 260px;
        padding: 3px 8px 3px 10px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 999px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
        line-height: 1.35;
        transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
      }
      .na-project-pill:hover {
        border-color: var(--dsw-alias-brand-primary);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 7%, var(--dsw-alias-bg-layer-1));
        color: var(--dsw-alias-label-primary);
      }
      .na-project-pill-text {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-project-pill svg {
        flex: none;
        color: var(--dsw-alias-label-secondary);
        opacity: 0.8;
      }
      .na-header-actions,
      .na-page-actions,
      .na-act-actions,
      .na-form-actions,
      .na-delete-actions {
        display: flex;
        align-items: center;
        gap: 7px;
      }
      .na-header-actions {
        flex: none;
      }

      .na-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        height: 34px;
        padding: 0 12px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-primary);
        font-size: 12.5px;
        font-weight: 550;
        line-height: 1;
        white-space: nowrap;
        transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
      }
      .na-btn:hover {
        border-color: var(--dsw-alias-border-l2);
        background: var(--dsw-alias-bg-layer-2);
      }
      .na-btn svg {
        color: var(--dsw-alias-label-secondary);
      }
      .na-btn-primary {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 48%, var(--dsw-alias-border-l1));
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, var(--dsw-alias-bg-layer-1));
        color: var(--dsw-alias-brand-primary);
      }
      .na-btn-primary svg {
        color: var(--dsw-alias-brand-primary);
      }
      .na-btn-primary:hover {
        border-color: var(--dsw-alias-brand-primary);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 21%, var(--dsw-alias-bg-layer-1));
      }
      .na-btn-active {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, var(--dsw-alias-border-l1));
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 17%, var(--dsw-alias-bg-layer-1));
        color: var(--dsw-alias-brand-primary);
      }
      .na-btn-active svg {
        color: var(--dsw-alias-brand-primary);
      }
      .na-btn-ghost {
        border-color: transparent;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
      }
      .na-btn-ghost:hover {
        border-color: transparent;
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-primary);
      }
      .na-btn-ghost-danger {
        border-color: transparent;
        background: transparent;
        color: var(--dsw-alias-state-error-primary);
      }
      .na-btn-ghost-danger:hover {
        border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 30%, var(--dsw-alias-border-l1));
        background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 9%, transparent);
      }
      .na-btn-danger {
        border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 55%, var(--dsw-alias-border-l1));
        background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 14%, var(--dsw-alias-bg-layer-1));
        color: var(--dsw-alias-state-error-primary);
      }
      .na-btn-danger:hover {
        border-color: var(--dsw-alias-state-error-primary);
        background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 22%, var(--dsw-alias-bg-layer-1));
      }
      .na-btn-danger svg {
        color: currentColor;
      }
      .na-btn-sm {
        height: 29px;
        padding: 0 9px;
        border-radius: 7px;
        font-size: 11.5px;
      }
      .na-icon-btn {
        display: inline-grid;
        flex: none;
        width: 32px;
        height: 32px;
        padding: 0;
        place-items: center;
        border: 1px solid transparent;
        border-radius: 8px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
      }
      .na-icon-btn:hover {
        border-color: var(--dsw-alias-border-l1);
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-primary);
      }

      .na-tabbar {
        display: flex;
        flex: none;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 0 26px;
        border-bottom: 1px solid var(--dsw-alias-border-l1);
        background: var(--dsw-alias-bg-base);
      }
      .na-tabs {
        display: flex;
        align-items: stretch;
        gap: 2px;
        min-width: 0;
      }
      .na-tab {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        height: 45px;
        padding: 0 11px 2px;
        border: 0;
        border-bottom: 2px solid transparent;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 12.5px;
        font-weight: 520;
        white-space: nowrap;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
      .na-tab:hover {
        color: var(--dsw-alias-label-primary);
      }
      .na-tab.is-active {
        border-bottom-color: var(--dsw-alias-brand-primary);
        color: var(--dsw-alias-label-primary);
      }
      .na-tab.is-active svg {
        color: var(--dsw-alias-brand-primary);
      }
      .na-tab-count {
        display: inline-grid;
        min-width: 18px;
        height: 18px;
        padding: 0 5px;
        place-items: center;
        border-radius: 999px;
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-secondary);
        font-size: 10px;
        font-variant-numeric: tabular-nums;
        line-height: 1;
      }
      .na-tab.is-active .na-tab-count {
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, var(--dsw-alias-bg-layer-2));
        color: var(--dsw-alias-brand-primary);
      }
      .na-save-state {
        display: inline-flex;
        flex: none;
        align-items: center;
        gap: 6px;
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
        white-space: nowrap;
      }
      .na-save-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--dsw-alias-state-success-primary);
      }
      .na-save-state.is-warn .na-save-dot {
        background: var(--dsw-alias-state-warn-primary);
      }

      .na-workspace {
        position: relative;
        display: grid;
        flex: 1;
        grid-template-columns: minmax(0, 1fr) 336px;
        min-height: 0;
      }
      .na-main {
        display: flex;
        flex-direction: column;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
      }
      .na-view {
        display: flex;
        flex: 1;
        flex-direction: column;
        min-width: 0;
        min-height: 0;
      }
      .na-scroll-view {
        overflow: auto;
      }
      .na-page-head {
        display: flex;
        flex: none;
        align-items: flex-end;
        justify-content: space-between;
        gap: 22px;
        padding: 21px 28px 16px;
      }
      .na-page-heading {
        min-width: 0;
      }
      .na-page-title {
        margin: 5px 0 3px;
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 24px;
        font-weight: 650;
        letter-spacing: 0.012em;
        line-height: 1.18;
      }
      .na-page-subtitle {
        max-width: 590px;
        margin: 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 12px;
        line-height: 1.55;
      }
      .na-page-actions {
        flex: none;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .na-graph-view {
        min-height: 0;
      }
      .na-graph-head {
        padding-bottom: 13px;
      }
      .na-timeline-panel {
        flex: none;
        margin: 0 16px 10px;
        padding: 10px 12px 7px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 11px;
        background: color-mix(in srgb, var(--dsw-alias-bg-layer-1) 78%, var(--dsw-alias-bg-base));
      }
      .na-timeline-head {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 14px;
      }
      .na-timeline-heading {
        display: flex;
        align-items: baseline;
        gap: 7px;
        min-width: 0;
      }
      .na-timeline-heading h3 {
        margin: 0;
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.2;
      }
      .na-timeline-meta {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
      }
      .na-timeline-hint {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-timeline-divider {
        opacity: 0.55;
      }
      .na-timeline-scroll {
        margin-top: 8px;
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 1px;
      }
      .na-timeline-track {
        position: relative;
        display: flex;
        align-items: flex-end;
        gap: 9px;
        min-width: max-content;
        padding: 1px 4px 16px;
      }
      .na-timeline-track::before {
        position: absolute;
        right: 6px;
        bottom: 7px;
        left: 6px;
        height: 1px;
        background: var(--dsw-alias-border-l2);
        content: "";
      }
      .na-time-item {
        --na-time-accent: var(--dsw-alias-state-idle-primary);
        position: relative;
        display: flex;
        flex: none;
        flex-direction: column;
        width: 148px;
        cursor: grab;
        user-select: none;
      }
      .na-time-item[data-kind="conflict"] {
        --na-time-accent: var(--dsw-alias-state-warn-primary);
      }
      .na-time-item[data-kind="turn"] {
        --na-time-accent: var(--dsw-alias-brand-primary);
      }
      .na-time-item[data-kind="climax"] {
        --na-time-accent: var(--dsw-alias-state-error-primary);
      }
      .na-time-item[data-kind="resolution"] {
        --na-time-accent: var(--dsw-alias-state-success-primary);
      }
      .na-time-item.is-dragging {
        cursor: grabbing;
        opacity: 0.5;
      }
      .na-time-card {
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-height: 72px;
        padding: 8px 9px;
        overflow: hidden;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1);
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }
      .na-time-item:hover .na-time-card {
        border-color: var(--dsw-alias-border-l2);
        box-shadow: 0 4px 12px color-mix(in srgb, var(--dsw-alias-label-primary) 8%, transparent);
      }
      .na-time-item.is-selected .na-time-card {
        border-color: var(--dsw-alias-brand-primary);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 13%, transparent);
      }
      .na-time-card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
      }
      .na-time-index {
        color: var(--na-time-accent);
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 14px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        line-height: 1;
      }
      .na-time-act {
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 8px;
        letter-spacing: 0.05em;
        text-overflow: ellipsis;
        text-transform: uppercase;
        white-space: nowrap;
      }
      .na-time-title {
        display: -webkit-box;
        overflow: hidden;
        font-size: 11px;
        font-weight: 600;
        line-height: 1.35;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .na-time-label {
        overflow: hidden;
        margin-top: auto;
        color: var(--dsw-alias-label-secondary);
        font-size: 8.5px;
        line-height: 1.4;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-time-dot {
        position: absolute;
        bottom: -10px;
        left: 50%;
        z-index: 1;
        width: 7px;
        height: 7px;
        border: 2px solid var(--dsw-alias-bg-layer-1);
        border-radius: 50%;
        background: var(--na-time-accent);
        box-shadow: 0 0 0 1px var(--dsw-alias-border-l2);
        transform: translateX(-50%);
      }
      .na-time-item.is-selected .na-time-dot {
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent);
      }
      .na-time-add {
        display: flex;
        flex: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        width: 88px;
        min-height: 72px;
        border: 1px dashed var(--dsw-alias-border-l2);
        border-radius: 8px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 9px;
      }
      .na-time-add:hover {
        border-color: var(--dsw-alias-brand-primary);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 7%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .na-timeline-empty {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 9px 2px 4px;
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
      }
      .na-graph-stage {
        position: relative;
        flex: 1;
        min-height: 0;
        padding: 0 16px 16px;
      }
      .na-canvas-scroll {
        width: 100%;
        height: 100%;
        overflow: auto;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 12px;
        background: var(--dsw-alias-bg-layer-1);
      }
      .na-canvas {
        position: relative;
        min-width: 100%;
        min-height: 100%;
        background-color: var(--dsw-alias-bg-layer-1);
        background-image: radial-gradient(
          circle at 1px 1px,
          color-mix(in srgb, var(--dsw-alias-border-l2) 55%, transparent) 1px,
          transparent 0
        );
        background-size: 22px 22px;
      }
      .na-time-axis-band {
        fill: var(--dsw-alias-bg-layer-1);
        fill: color-mix(in srgb, var(--dsw-alias-bg-base) 72%, transparent);
      }
      .na-time-gridline {
        stroke: var(--dsw-alias-border-l1);
        stroke: color-mix(in srgb, var(--dsw-alias-border-l1) 78%, transparent);
        stroke-width: 1;
        stroke-dasharray: 2 5;
      }
      .na-time-axis-line {
        stroke: var(--dsw-alias-border-l2);
        stroke-width: 1;
      }
      .na-time-tick {
        fill: var(--dsw-alias-label-secondary);
        font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
        font-size: 9.5px;
        font-variant-numeric: tabular-nums;
      }
      .na-time-axis-title {
        fill: var(--dsw-alias-label-secondary);
        font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.12em;
      }
      .na-edge-layer {
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
      }
      .na-edge-hit {
        fill: none;
        stroke: transparent;
        stroke-width: 18;
        pointer-events: stroke;
        cursor: pointer;
      }
      .na-edge {
        fill: none;
        stroke: var(--dsw-alias-border-l2);
        stroke-width: 1.6;
        pointer-events: none;
      }
      .na-edge.is-active {
        stroke: var(--dsw-alias-brand-primary);
        stroke-width: 2.4;
      }
      .na-arrow-head {
        fill: var(--dsw-alias-label-secondary);
      }
      .na-arrow-head.is-active {
        fill: var(--dsw-alias-brand-primary);
      }
      .na-edge-label {
        pointer-events: none;
        user-select: none;
      }
      .na-edge-label rect {
        fill: var(--dsw-alias-bg-layer-1);
        stroke: var(--dsw-alias-border-l1);
        stroke-width: 1;
      }
      .na-edge-label text {
        fill: var(--dsw-alias-label-secondary);
        font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
        font-size: 10.5px;
        letter-spacing: 0.02em;
      }
      .na-edge-label.is-active rect {
        stroke: var(--dsw-alias-brand-primary);
      }
      .na-edge-label.is-active text {
        fill: var(--dsw-alias-brand-primary);
      }

      .na-node {
        --na-node-accent: var(--dsw-alias-state-idle-primary);
        position: absolute;
        z-index: 2;
        display: flex;
        flex-direction: column;
        min-width: 160px;
        height: 138px;
        padding: 12px 18px 10px 14px;
        overflow: hidden;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 11px;
        background: var(--dsw-alias-bg-layer-1);
        box-shadow: 0 1px 2px color-mix(in srgb, var(--dsw-alias-label-primary) 7%, transparent);
        cursor: grab;
        user-select: none;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }
      .na-node::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 3px;
        background: var(--na-node-accent);
        content: "";
        opacity: 0.86;
      }
      .na-node[data-kind="conflict"] {
        --na-node-accent: var(--dsw-alias-state-warn-primary);
      }
      .na-node[data-kind="turn"] {
        --na-node-accent: var(--dsw-alias-brand-primary);
      }
      .na-node[data-kind="climax"] {
        --na-node-accent: var(--dsw-alias-state-error-primary);
      }
      .na-node[data-kind="resolution"] {
        --na-node-accent: var(--dsw-alias-state-success-primary);
      }
      .na-node:hover {
        border-color: var(--dsw-alias-border-l2);
        box-shadow: 0 5px 16px color-mix(in srgb, var(--dsw-alias-label-primary) 10%, transparent);
      }
      .na-node.is-selected {
        border-color: var(--dsw-alias-brand-primary);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 15%, transparent),
          0 7px 18px color-mix(in srgb, var(--dsw-alias-label-primary) 11%, transparent);
      }
      .na-node.is-source {
        border-style: dashed;
        border-color: var(--dsw-alias-brand-primary);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 19%, transparent);
      }
      .na-node.is-dragging {
        z-index: 5;
        cursor: grabbing;
        border-color: var(--dsw-alias-brand-primary);
        box-shadow: 0 13px 28px color-mix(in srgb, var(--dsw-alias-label-primary) 18%, transparent);
      }
      .na-node.is-resizing {
        z-index: 5;
        cursor: ew-resize;
        border-color: var(--dsw-alias-brand-primary);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 15%, transparent),
          0 9px 22px color-mix(in srgb, var(--dsw-alias-label-primary) 13%, transparent);
      }
      .na-graph-stage.is-connecting .na-node {
        cursor: crosshair;
      }
      .na-node-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        line-height: 1.2;
      }
      .na-node-kind {
        display: inline-flex;
        flex: none;
        align-items: center;
        gap: 5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .na-node-time-range {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        color: var(--dsw-alias-brand-primary);
        font-size: 9px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-node-act {
        flex: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-kind-dot {
        display: inline-block;
        flex: none;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--dsw-alias-state-idle-primary);
      }
      .na-kind-dot[data-kind="conflict"] {
        background: var(--dsw-alias-state-warn-primary);
      }
      .na-kind-dot[data-kind="turn"] {
        background: var(--dsw-alias-brand-primary);
      }
      .na-kind-dot[data-kind="climax"] {
        background: var(--dsw-alias-state-error-primary);
      }
      .na-kind-dot[data-kind="resolution"] {
        background: var(--dsw-alias-state-success-primary);
      }
      .na-node-title {
        margin: 6px 0 3px;
        overflow: hidden;
        font-size: 13.5px;
        font-weight: 620;
        letter-spacing: 0.003em;
        line-height: 1.35;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-node-summary {
        display: -webkit-box;
        flex: 1;
        margin: 0;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 11.5px;
        line-height: 1.5;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .na-node-foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-top: 6px;
        padding-top: 7px;
        border-top: 1px solid var(--dsw-alias-border-l1);
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
      }
      .na-node-foot-meta {
        display: flex;
        flex: 1;
        align-items: center;
        gap: 4px;
        min-width: 0;
        overflow: hidden;
      }
      .na-node-link-count {
        display: inline-flex;
        flex: none;
        align-items: center;
        gap: 4px;
        white-space: nowrap;
      }
      .na-node-time {
        display: inline-flex;
        flex: 1;
        align-items: center;
        gap: 4px;
        min-width: 0;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-node-time svg {
        flex: none;
        color: var(--dsw-alias-brand-primary);
        opacity: 0.8;
      }
      .na-node-resize {
        position: absolute;
        top: 10px;
        right: 0;
        bottom: 10px;
        width: 11px;
        border-radius: 0 10px 10px 0;
        cursor: ew-resize;
        opacity: 0.3;
        transition: opacity 0.15s ease, background 0.15s ease;
      }
      .na-node-resize::after {
        position: absolute;
        top: 50%;
        right: 3px;
        width: 3px;
        height: 28px;
        border-radius: 2px;
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 38%, transparent);
        content: "";
        transform: translateY(-50%);
      }
      .na-node:hover .na-node-resize,
      .na-node.is-resizing .na-node-resize {
        opacity: 1;
      }
      .na-node-resize:hover {
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
      }
      .na-node-resize:hover::after {
        background: var(--dsw-alias-brand-primary);
      }
      .na-node-drag-hint {
        overflow: hidden;
        opacity: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: opacity 0.15s ease;
      }
      .na-node:hover .na-node-drag-hint {
        opacity: 1;
      }
      .na-canvas-empty {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        padding: 28px;
      }
      .na-connect-bar {
        position: absolute;
        top: 14px;
        left: 50%;
        z-index: 8;
        display: flex;
        align-items: center;
        gap: 8px;
        max-width: calc(100% - 56px);
        padding: 8px 9px 8px 12px;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 44%, var(--dsw-alias-border-l1));
        border-radius: 9px;
        background: var(--dsw-alias-bg-overlay);
        box-shadow: 0 9px 26px color-mix(in srgb, var(--dsw-alias-label-primary) 16%, transparent);
        color: var(--dsw-alias-label-primary);
        font-size: 11.5px;
        transform: translateX(-50%);
      }
      .na-connect-bar > svg {
        flex: none;
        color: var(--dsw-alias-brand-primary);
      }
      .na-connect-bar > span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-connect-exit {
        flex: none;
        padding: 3px 7px;
        border: 0;
        border-radius: 5px;
        background: transparent;
        color: var(--dsw-alias-brand-primary);
        font-size: 11px;
      }
      .na-connect-exit:hover {
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 11%, transparent);
      }

      .na-inspector {
        display: flex;
        flex-direction: column;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
        border-left: 1px solid var(--dsw-alias-border-l1);
        background: var(--dsw-alias-bg-layer-1);
      }
      .na-inspector-head {
        display: flex;
        flex: none;
        align-items: flex-start;
        justify-content: space-between;
        gap: 10px;
        padding: 18px 18px 14px;
        border-bottom: 1px solid var(--dsw-alias-border-l1);
      }
      .na-inspector-heading {
        min-width: 0;
      }
      .na-inspector-kicker {
        display: block;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        font-weight: 600;
        letter-spacing: 0.1em;
        line-height: 1.2;
        text-overflow: ellipsis;
        text-transform: uppercase;
        white-space: nowrap;
      }
      .na-inspector-title {
        display: -webkit-box;
        margin: 4px 0 0;
        overflow: hidden;
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 17px;
        font-weight: 600;
        line-height: 1.3;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .na-inspector-body {
        flex: 1;
        min-height: 0;
        overflow: auto;
        padding: 18px;
      }
    `;

    CSS += `
      .na-overview {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .na-overview-title {
        margin: 0;
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 21px;
        font-weight: 600;
        line-height: 1.2;
      }
      .na-overview-body {
        margin: -11px 0 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 12px;
        line-height: 1.6;
      }
      .na-stat-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 7px;
      }
      .na-stat-tile {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
        padding: 8px 9px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-base);
      }
      .na-stat-value {
        overflow: hidden;
        color: var(--dsw-alias-label-primary);
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 19px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        line-height: 1.08;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-stat-label {
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 9px;
        letter-spacing: 0.05em;
        line-height: 1.3;
        text-overflow: ellipsis;
        text-transform: uppercase;
        white-space: nowrap;
      }
      .na-overview-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .na-overview-section-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }
      .na-overview-percent {
        color: var(--dsw-alias-label-primary);
        font-size: 11.5px;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0;
      }
      .na-progress {
        height: 5px;
        overflow: hidden;
        border-radius: 99px;
        background: var(--dsw-alias-bg-layer-2);
      }
      .na-progress > span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: var(--dsw-alias-brand-primary);
        transition: width 0.3s ease;
      }
      .na-progress-success > span {
        background: var(--dsw-alias-state-success-primary);
      }
      .na-overview-note {
        margin: 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
        line-height: 1.5;
      }
      .na-overview-note.is-warn {
        color: var(--dsw-alias-state-warn-primary);
      }
      .na-overview-note.is-ok {
        color: var(--dsw-alias-state-success-primary);
      }
      .na-legend {
        display: flex;
        flex-wrap: wrap;
        gap: 7px 12px;
      }
      .na-legend-item {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
      }
      .na-overview-edge-list {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .na-overview-edge {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
        padding: 6px 7px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: var(--dsw-alias-bg-base);
        text-align: left;
      }
      .na-overview-edge:hover {
        border-color: var(--dsw-alias-brand-primary);
      }
      .na-overview-edge-endpoints {
        display: inline-flex;
        flex: 1;
        align-items: center;
        gap: 4px;
        min-width: 0;
        overflow: hidden;
        color: var(--dsw-alias-label-primary);
        font-size: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-overview-edge-endpoints svg {
        flex: none;
        color: var(--dsw-alias-brand-primary);
      }
      .na-overview-edge-label {
        flex: none;
        max-width: 74px;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 9px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-mix-list {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
      .na-mix-row {
        display: grid;
        grid-template-columns: 74px minmax(0, 1fr) 18px;
        align-items: center;
        gap: 7px;
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
      }
      .na-mix-track {
        height: 5px;
        overflow: hidden;
        border-radius: 99px;
        background: var(--dsw-alias-bg-layer-2);
      }
      .na-mix-track > i {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: var(--dsw-alias-brand-primary);
      }
      .na-mix-count {
        color: var(--dsw-alias-label-secondary);
        font-variant-numeric: tabular-nums;
        text-align: right;
      }
      .na-status-name[data-status="done"] {
        color: var(--dsw-alias-state-success-primary);
      }
      .na-status-name[data-status="revise"] {
        color: var(--dsw-alias-state-warn-primary);
      }
      .na-status-name[data-status="draft"] {
        color: var(--dsw-alias-brand-primary);
      }
      .na-trait-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }
      .na-act-mini-list {
        display: flex;
        flex-direction: column;
        gap: 9px;
      }
      .na-act-mini {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .na-act-mini-index {
        display: grid;
        flex: none;
        width: 22px;
        height: 22px;
        place-items: center;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 50%;
        color: var(--dsw-alias-brand-primary);
        font-family: "Iowan Old Style", "Songti SC", Georgia, serif;
        font-size: 9px;
      }
      .na-act-mini-copy {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .na-act-mini-title {
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
      }

      .na-character-toolbar {
        display: flex;
        flex: none;
        flex-wrap: wrap;
        align-items: center;
        gap: 9px;
        padding: 0 28px 17px;
      }
      .na-search {
        display: flex;
        flex: 1;
        align-items: center;
        gap: 7px;
        min-width: 210px;
        max-width: 360px;
        height: 34px;
        padding: 0 10px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-secondary);
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }
      .na-search:focus-within {
        border-color: var(--dsw-alias-brand-primary);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 13%, transparent);
      }
      .na-search input {
        flex: 1;
        min-width: 0;
        height: 100%;
        padding: 0;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--dsw-alias-label-primary);
        font-size: 12px;
      }
      .na-search input::placeholder {
        color: var(--dsw-alias-label-secondary);
      }
      .na-search input::-webkit-search-cancel-button {
        filter: grayscale(1);
      }
      .na-select-wrap {
        display: flex;
        align-items: center;
        gap: 5px;
        height: 34px;
        padding: 0 9px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-secondary);
      }
      .na-select-wrap select {
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--dsw-alias-label-primary);
        font-size: 11.5px;
      }
      .na-filter-count {
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
      }
      .na-trait-summary {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px;
        margin-left: auto;
      }
      .na-trait-summary-label {
        margin-right: 2px;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .na-character-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 13px;
        padding: 0 28px 36px;
      }
      .na-character-card {
        --na-accent: var(--dsw-alias-brand-primary);
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 9px;
        min-height: 196px;
        padding: 14px;
        overflow: hidden;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 11px;
        background: var(--dsw-alias-bg-layer-1);
        text-align: left;
        transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
      }
      .na-character-card::before {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 3px;
        background: var(--na-accent);
        content: "";
        opacity: 0.85;
      }
      .na-character-card:hover {
        border-color: var(--dsw-alias-border-l2);
        box-shadow: 0 7px 18px color-mix(in srgb, var(--dsw-alias-label-primary) 9%, transparent);
        transform: translateY(-1px);
      }
      .na-character-card.is-selected {
        border-color: var(--na-accent);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--na-accent) 17%, transparent);
      }
      .na-char-top {
        display: flex;
        align-items: center;
        gap: 9px;
        min-width: 0;
      }
      .na-avatar {
        display: grid;
        flex: none;
        width: 38px;
        height: 38px;
        place-items: center;
        border: 1px solid color-mix(in srgb, var(--na-accent) 32%, var(--dsw-alias-border-l1));
        border-radius: 10px;
        background: color-mix(in srgb, var(--na-accent) 18%, var(--dsw-alias-bg-layer-2));
        color: var(--na-accent);
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 18px;
        font-weight: 650;
      }
      .na-char-identity {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }
      .na-char-name {
        overflow: hidden;
        font-size: 14.5px;
        font-weight: 620;
        line-height: 1.3;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-char-role {
        display: flex;
        align-items: center;
        gap: 5px;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-dot-sep {
        opacity: 0.6;
      }
      .na-char-chevron {
        flex: none;
        color: var(--dsw-alias-label-secondary);
        opacity: 0;
        transform: translateX(-2px);
        transition: opacity 0.15s ease, transform 0.15s ease;
      }
      .na-character-card:hover .na-char-chevron,
      .na-character-card.is-selected .na-char-chevron {
        opacity: 1;
        transform: translateX(0);
      }
      .na-char-oneline {
        display: -webkit-box;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 11.5px;
        line-height: 1.5;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .na-trait-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        min-height: 21px;
      }
      .na-trait {
        display: inline-flex;
        align-items: center;
        padding: 1px 6px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 5px;
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        line-height: 1.6;
        white-space: nowrap;
      }
      .na-trait.is-empty {
        border-style: dashed;
        background: transparent;
      }
      .na-trait.is-quiet {
        background: transparent;
      }
      .na-trait-more {
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
      }
      .na-char-goal {
        display: flex;
        align-items: baseline;
        gap: 7px;
        min-width: 0;
        margin-top: auto;
        padding-top: 8px;
        border-top: 1px solid var(--dsw-alias-border-l1);
      }
      .na-char-goal-label {
        flex: none;
        color: var(--dsw-alias-label-secondary);
        font-size: 9px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .na-char-goal-text {
        display: -webkit-box;
        overflow: hidden;
        color: var(--dsw-alias-label-primary);
        font-size: 10.5px;
        line-height: 1.45;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .na-outline-doc {
        width: 100%;
        max-width: 1060px;
        padding: 0 28px 52px;
      }
      .na-outline-doc > .na-empty-wrap {
        min-height: 260px;
      }
      .na-outline-hero {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 26px;
        padding: 19px 0 18px;
        border-bottom: 1px solid var(--dsw-alias-border-l1);
      }
      .na-outline-hero-copy {
        min-width: 0;
      }
      .na-outline-genre {
        display: inline-block;
        color: var(--dsw-alias-brand-primary);
        font-size: 9.5px;
        font-weight: 650;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }
      .na-outline-title {
        margin: 6px 0 7px;
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 34px;
        font-weight: 650;
        letter-spacing: 0.015em;
        line-height: 1.08;
      }
      .na-outline-logline {
        max-width: 640px;
        margin: 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 12.5px;
        line-height: 1.65;
      }
      .na-outline-stats {
        display: grid;
        flex: none;
        grid-template-columns: repeat(2, minmax(82px, 1fr));
        gap: 7px;
        min-width: 220px;
      }
      .na-synopsis-card {
        margin: 17px 0 27px;
        padding: 15px 18px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-left: 2px solid var(--dsw-alias-brand-primary);
        border-radius: 0 10px 10px 0;
        background: var(--dsw-alias-bg-layer-1);
      }
      .na-section-label {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 7px;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        font-weight: 600;
        letter-spacing: 0.11em;
        text-transform: uppercase;
      }
      .na-synopsis {
        margin: 0;
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 14px;
        line-height: 1.9;
      }
      .na-synopsis.is-empty {
        color: var(--dsw-alias-label-secondary);
        font-family: inherit;
        font-size: 12px;
        line-height: 1.6;
      }
      .na-act-stack {
        display: flex;
        flex-direction: column;
        gap: 23px;
      }
      .na-act-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--dsw-alias-border-l1);
      }
      .na-act-heading {
        display: flex;
        align-items: center;
        gap: 11px;
        min-width: 0;
      }
      .na-act-index {
        display: grid;
        flex: none;
        width: 32px;
        height: 32px;
        place-items: center;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 34%, var(--dsw-alias-border-l1));
        border-radius: 50%;
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 7%, var(--dsw-alias-bg-layer-1));
        color: var(--dsw-alias-brand-primary);
        font-family: "Iowan Old Style", "Songti SC", Georgia, serif;
        font-size: 11px;
        font-weight: 600;
      }
      .na-act-copy {
        min-width: 0;
      }
      .na-act-title-row {
        display: flex;
        align-items: baseline;
        gap: 7px;
        min-width: 0;
      }
      .na-act-title-row h4 {
        margin: 0;
        font-size: 13.5px;
        font-weight: 620;
        line-height: 1.3;
      }
      .na-volume-title {
        flex: 0 1 auto;
        min-width: 0;
        max-width: 100%;
        padding: 0;
        overflow: hidden;
        border: 0;
        background: transparent;
        color: var(--dsw-alias-label-primary);
        font-size: 13.5px;
        font-weight: 620;
        line-height: 1.3;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: color 0.15s ease;
      }
      .na-volume-title:hover {
        color: var(--dsw-alias-brand-primary);
      }
      .na-volume-summary {
        display: -webkit-box;
        margin: 2px 0 0;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
        line-height: 1.45;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .na-act-note {
        color: var(--dsw-alias-label-secondary);
        font-size: 9px;
        letter-spacing: 0.09em;
        text-transform: uppercase;
      }
      .na-act-meta {
        display: block;
        margin-top: 2px;
        color: var(--dsw-alias-label-secondary);
        font-size: 10px;
      }
      .na-act-actions {
        flex: none;
      }
      .na-act-progress {
        width: 66px;
      }
      .na-chapter-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-top: 11px;
      }
      .na-chapter-row {
        display: flex;
        align-items: flex-start;
        gap: 13px;
        width: 100%;
        padding: 13px 14px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 10px;
        background: var(--dsw-alias-bg-layer-1);
        text-align: left;
        transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
      }
      .na-chapter-row:hover {
        border-color: var(--dsw-alias-border-l2);
        background: color-mix(in srgb, var(--dsw-alias-bg-layer-2) 55%, var(--dsw-alias-bg-layer-1));
      }
      .na-chapter-row.is-selected {
        border-color: var(--dsw-alias-brand-primary);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
      }
      .na-chapter-number {
        flex: none;
        width: 31px;
        color: var(--dsw-alias-label-secondary);
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 20px;
        font-variant-numeric: tabular-nums;
        line-height: 1.15;
      }
      .na-chapter-main {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 5px;
        min-width: 0;
      }
      .na-chapter-top {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 7px;
      }
      .na-chapter-title {
        font-size: 13.5px;
        font-weight: 620;
        line-height: 1.35;
      }
      .na-chapter-target {
        margin-left: auto;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        white-space: nowrap;
      }
      .na-chapter-summary {
        display: -webkit-box;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 11.5px;
        line-height: 1.55;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .na-chapter-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        margin-top: 1px;
      }
      .na-chapter-pov {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-right: 3px;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
      }
      .na-beat-chip {
        padding: 1px 5px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 4px;
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-secondary);
        font-size: 9px;
        line-height: 1.6;
        white-space: nowrap;
      }
      .na-beat-chip.is-empty {
        border-style: dashed;
        background: transparent;
      }
      .na-beat-more {
        color: var(--dsw-alias-label-secondary);
        font-size: 9px;
      }
      .na-chapter-chevron {
        flex: none;
        margin-top: 3px;
        color: var(--dsw-alias-label-secondary);
        opacity: 0;
        transform: translateX(-2px);
        transition: opacity 0.15s ease, transform 0.15s ease;
      }
      .na-chapter-row:hover .na-chapter-chevron,
      .na-chapter-row.is-selected .na-chapter-chevron {
        opacity: 1;
        transform: translateX(0);
      }
      .na-status-badge {
        display: inline-flex;
        flex: none;
        align-items: center;
        gap: 4px;
        padding: 1px 6px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 999px;
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-secondary);
        font-size: 9px;
        line-height: 1.6;
        white-space: nowrap;
      }
      .na-status-dot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--dsw-alias-state-idle-primary);
      }
      .na-status-badge[data-status="draft"] .na-status-dot {
        background: var(--dsw-alias-brand-primary);
      }
      .na-status-badge[data-status="revise"] .na-status-dot {
        background: var(--dsw-alias-state-warn-primary);
      }
      .na-status-badge[data-status="done"] .na-status-dot {
        background: var(--dsw-alias-state-success-primary);
      }
      .na-status-badge[data-status="done"] {
        color: var(--dsw-alias-state-success-primary);
      }
      .na-act-empty {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-top: 11px;
        padding: 13px 14px;
        border: 1px dashed var(--dsw-alias-border-l2);
        border-radius: 9px;
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
      }
      .na-add-volume {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 100%;
        padding: 11px;
        border: 1px dashed var(--dsw-alias-border-l2);
        border-radius: 9px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
        transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
      }
      .na-add-volume:hover {
        border-color: var(--dsw-alias-brand-primary);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 6%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .na-order-actions {
        display: flex;
        align-items: center;
        gap: 6px;
        padding-top: 2px;
      }

      .na-form {
        display: flex;
        flex-direction: column;
        gap: 13px;
      }
      .na-form-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 9px;
      }
      .na-field {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .na-field-label {
        color: var(--dsw-alias-label-secondary);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.04em;
        line-height: 1.35;
      }
      .na-input,
      .na-textarea,
      .na-select {
        width: 100%;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 7px;
        outline: 0;
        background: var(--dsw-alias-bg-base);
        color: var(--dsw-alias-label-primary);
        font-size: 12px;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }
      .na-input,
      .na-select {
        height: 33px;
        padding: 0 9px;
      }
      .na-textarea {
        min-height: 62px;
        padding: 7px 9px;
        line-height: 1.55;
        resize: vertical;
      }
      .na-input::placeholder,
      .na-textarea::placeholder {
        color: var(--dsw-alias-label-secondary);
        opacity: 0.82;
      }
      .na-input:focus,
      .na-textarea:focus,
      .na-select:focus {
        border-color: var(--dsw-alias-brand-primary);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
      }
      .na-select {
        cursor: pointer;
      }
      .na-hint {
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        line-height: 1.4;
      }
      .na-segmented {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        padding: 3px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-base);
      }
      .na-segment {
        flex: 1;
        min-width: 46px;
        padding: 4px 6px;
        border: 0;
        border-radius: 5px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
        line-height: 1.5;
        white-space: nowrap;
        transition: background 0.15s ease, color 0.15s ease;
      }
      .na-segment:hover {
        color: var(--dsw-alias-label-primary);
      }
      .na-segment.is-active {
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-primary);
        box-shadow: 0 1px 2px color-mix(in srgb, var(--dsw-alias-label-primary) 9%, transparent);
      }
      .na-form-actions {
        justify-content: flex-end;
        padding-top: 2px;
      }
      .na-form-danger {
        margin-top: 4px;
        padding-top: 13px;
        border-top: 1px solid var(--dsw-alias-border-l1);
      }
      .na-form-note {
        margin: -3px 0 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        text-align: right;
      }
      .na-swatches {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        padding-top: 2px;
      }
      .na-swatch {
        width: 24px;
        height: 24px;
        padding: 0;
        border: 2px solid transparent;
        border-radius: 50%;
        background: var(--na-swatch);
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--dsw-alias-label-primary) 13%, transparent);
      }
      .na-swatch.is-active {
        border-color: var(--dsw-alias-bg-layer-1);
        outline: 2px solid var(--na-swatch);
        outline-offset: 1px;
      }
      .na-edge-summary {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 11px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-base);
      }
      .na-edge-summary svg {
        flex: none;
        color: var(--dsw-alias-brand-primary);
      }
      .na-edge-endpoint {
        flex: 1;
        overflow: hidden;
        font-size: 11px;
        font-weight: 550;
        line-height: 1.4;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-edge-summary-caption {
        margin: -6px 0 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        line-height: 1.45;
      }
      .na-relation-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }
      .na-chip {
        padding: 2px 7px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 5px;
        background: var(--dsw-alias-bg-base);
        color: var(--dsw-alias-label-secondary);
        font-size: 10px;
        line-height: 1.6;
      }
      .na-chip:hover {
        border-color: var(--dsw-alias-border-l2);
        color: var(--dsw-alias-label-primary);
      }
      .na-chip.is-active {
        border-color: var(--dsw-alias-brand-primary);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .na-delete-control {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .na-delete-confirm {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .na-delete-confirm p {
        margin: 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
        line-height: 1.5;
      }
      .na-delete-actions {
        justify-content: flex-end;
      }

      .na-empty-wrap {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding: 20px 28px 60px;
      }
      .na-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 360px;
        padding: 24px;
        text-align: center;
      }
      .na-empty-icon {
        display: grid;
        width: 52px;
        height: 52px;
        margin-bottom: 12px;
        place-items: center;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 14px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-brand-primary);
      }
      .na-empty h3 {
        margin: 0 0 5px;
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 18px;
        font-weight: 600;
      }
      .na-empty p {
        margin: 0 0 14px;
        color: var(--dsw-alias-label-secondary);
        font-size: 11.5px;
        line-height: 1.6;
      }

      .na-dialog-backdrop {
        position: absolute;
        inset: 0;
        z-index: 40;
        display: grid;
        padding: 24px;
        place-items: center;
        background: color-mix(in srgb, var(--dsw-alias-label-primary) 17%, transparent);
        backdrop-filter: blur(3px);
      }
      .na-dialog {
        display: flex;
        flex-direction: column;
        width: min(620px, 100%);
        max-height: min(740px, calc(100% - 40px));
        overflow: hidden;
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: 14px;
        background: var(--dsw-alias-bg-overlay);
        box-shadow: 0 24px 60px color-mix(in srgb, var(--dsw-alias-label-primary) 24%, transparent);
      }
      .na-dialog-head {
        display: flex;
        flex: none;
        align-items: flex-start;
        justify-content: space-between;
        gap: 14px;
        padding: 20px 22px 15px;
        border-bottom: 1px solid var(--dsw-alias-border-l1);
      }
      .na-dialog-heading {
        min-width: 0;
      }
      .na-dialog-title {
        margin: 4px 0 4px;
        font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", Georgia, serif;
        font-size: 22px;
        font-weight: 600;
        line-height: 1.2;
      }
      .na-dialog-subtitle {
        max-width: 480px;
        margin: 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 11.5px;
        line-height: 1.55;
      }
      .na-dialog-body {
        flex: 1;
        min-height: 0;
        overflow: auto;
        padding: 18px 22px 20px;
      }
      .na-dialog-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 7px;
        padding-top: 14px;
      }
      .na-project-library {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .na-project-library-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .na-project-count {
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
      }
      .na-project-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .na-project-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 2px 8px 2px 2px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 9px;
        background: var(--dsw-alias-bg-base);
        transition: border-color 0.15s ease, background 0.15s ease;
      }
      .na-project-row:hover {
        border-color: var(--dsw-alias-border-l2);
      }
      .na-project-row.is-active {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, var(--dsw-alias-border-l1));
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 5%, var(--dsw-alias-bg-base));
      }
      .na-project-row-main {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
        padding: 10px 10px 10px 12px;
        border: 0;
        border-radius: 7px;
        background: transparent;
        text-align: left;
      }
      .na-project-row-main:hover {
        background: color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent);
      }
      .na-project-row-top {
        display: flex;
        align-items: center;
        gap: 7px;
        min-width: 0;
      }
      .na-project-row-title {
        overflow: hidden;
        font-size: 13px;
        font-weight: 620;
        line-height: 1.35;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-project-badge {
        flex: none;
        padding: 1px 6px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
        color: var(--dsw-alias-brand-primary);
        font-size: 8.5px;
        line-height: 1.6;
      }
      .na-project-row-meta {
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-size: 10px;
        line-height: 1.45;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .na-project-check {
        display: grid;
        flex: none;
        width: 24px;
        height: 24px;
        place-items: center;
        border-radius: 50%;
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 11%, transparent);
        color: var(--dsw-alias-brand-primary);
      }

      .na-toast {
        position: absolute;
        bottom: 22px;
        left: 50%;
        z-index: 30;
        display: flex;
        align-items: center;
        gap: 7px;
        max-width: min(440px, calc(100% - 40px));
        padding: 8px 13px;
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: 9px;
        background: var(--dsw-alias-bg-overlay);
        box-shadow: 0 10px 28px color-mix(in srgb, var(--dsw-alias-label-primary) 17%, transparent);
        color: var(--dsw-alias-label-primary);
        font-size: 11.5px;
        line-height: 1.4;
        transform: translateX(-50%);
        animation: na-toast-in 0.18s ease-out;
      }
      .na-toast svg {
        flex: none;
        color: var(--dsw-alias-state-success-primary);
      }
      .na-toast.is-warn svg {
        color: var(--dsw-alias-state-warn-primary);
      }
      .na-toast.is-error {
        border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 48%, var(--dsw-alias-border-l1));
        color: var(--dsw-alias-state-error-primary);
      }
      .na-toast.is-error svg {
        color: var(--dsw-alias-state-error-primary);
      }
      @keyframes na-toast-in {
        from {
          opacity: 0;
          transform: translate(-50%, 5px);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }

      @media (max-width: 1120px) {
        .na-workspace {
          grid-template-columns: minmax(0, 1fr) 306px;
        }
        .na-header {
          padding-right: 20px;
          padding-left: 20px;
        }
        .na-tabbar {
          padding-right: 20px;
          padding-left: 20px;
        }
        .na-page-head {
          padding-right: 22px;
          padding-left: 22px;
        }
        .na-character-toolbar,
        .na-character-grid,
        .na-outline-doc {
          padding-right: 22px;
          padding-left: 22px;
        }
        .na-outline-stats {
          grid-template-columns: repeat(2, minmax(74px, 1fr));
          min-width: 190px;
        }
        .na-save-text {
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      @media (max-width: 860px) {
        .na-workspace {
          grid-template-columns: minmax(0, 1fr);
        }
        .na-inspector {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 12;
          width: min(364px, 88%);
          border-left: 1px solid var(--dsw-alias-border-l2);
          box-shadow: -14px 0 34px color-mix(in srgb, var(--dsw-alias-label-primary) 17%, transparent);
        }
        .na-workspace:not(.na-has-selection) .na-inspector {
          display: none;
        }
        .na-outline-hero {
          flex-direction: column;
          gap: 15px;
        }
        .na-outline-stats {
          width: 100%;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .na-project-pill {
          max-width: 155px;
        }
        .na-timeline-hint {
          display: none;
        }
        .na-save-text {
          display: none;
        }
      }
      @media (max-width: 640px) {
        .na-header {
          gap: 10px;
          padding: 13px 14px 11px;
        }
        .na-brand-mark {
          width: 34px;
          height: 34px;
        }
        .na-title-line h1 {
          font-size: 17px;
        }
        .na-header-actions .na-btn-ghost .na-btn-label {
          display: none;
        }
        .na-header-actions .na-btn-ghost {
          width: 32px;
          padding: 0;
        }
        .na-tabbar {
          padding: 0 12px;
        }
        .na-tab {
          gap: 5px;
          padding: 0 7px;
          font-size: 11.5px;
        }
        .na-tab-count {
          display: none;
        }
        .na-page-head {
          align-items: flex-start;
          flex-direction: column;
          gap: 11px;
          padding: 16px 14px 13px;
        }
        .na-page-title {
          font-size: 21px;
        }
        .na-page-actions {
          width: 100%;
          justify-content: flex-start;
        }
        .na-graph-stage {
          padding: 0 10px 10px;
        }
        .na-timeline-panel {
          margin: 0 10px 8px;
          padding: 8px 9px 6px;
        }
        .na-dialog-backdrop {
          padding: 10px;
        }
        .na-dialog-head {
          padding: 16px 16px 13px;
        }
        .na-dialog-body {
          padding: 14px 16px 16px;
        }
        .na-dialog-title {
          font-size: 19px;
        }
        .na-project-pill {
          max-width: 120px;
        }
        .na-character-toolbar {
          padding: 0 14px 13px;
        }
        .na-search {
          max-width: none;
        }
        .na-trait-summary {
          display: none;
        }
        .na-character-grid {
          grid-template-columns: 1fr;
          padding: 0 14px 28px;
        }
        .na-outline-doc {
          padding: 0 14px 36px;
        }
        .na-outline-title {
          font-size: 28px;
        }
        .na-outline-stats {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .na-act-head {
          align-items: flex-start;
          flex-direction: column;
          gap: 9px;
        }
        .na-act-actions {
          width: 100%;
          justify-content: space-between;
        }
        .na-act-progress {
          flex: 1;
          width: auto;
        }
        .na-chapter-row {
          gap: 9px;
          padding: 11px;
        }
        .na-chapter-number {
          width: 25px;
          font-size: 17px;
        }
        .na-chapter-target {
          display: none;
        }
        .na-form-grid {
          grid-template-columns: 1fr;
        }
        .na-inspector {
          width: 94%;
        }
        .na-char-chevron,
        .na-chapter-chevron {
          display: none;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .na-root *,
        .na-root *::before,
        .na-root *::after {
          scroll-behavior: auto !important;
          transition-duration: 0.01ms !important;
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
        }
      }
    `;

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(() => {
          const disposeZh = ctx.locale.register(NS, 'zh', ZH);
          const disposeEn = ctx.locale.register(NS, 'en', EN);
          return () => {
            disposeZh();
            disposeEn();
          };
        }, 'novel-assistant: dictionaries');
        const t = ctx.locale.bind(NS);
        const App = function NovelAssistantApp() {
          return h(NovelApp, { t, locale: ctx.locale });
        };
        ctx.slots.inject('main', () =>
          ctx.slots.register(
            {
              name: 'main',
              key: 'novel-assistant',
            },
            App,
          ),
        );
        ctx.slots.inject('sidebar.panellist', () =>
          ctx.slots.register(
            {
              name: 'sidebar.panellist',
              id: 'novel-assistant',
              order: 20,
              label: () => t('panel.title'),
            },
            PanelIcon,
          ),
        );
      },
    };
  },
});
