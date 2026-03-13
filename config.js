// ==================== 全局配置文件 ====================
// 倒计时配置
const COUNTDOWNS = [
    { name: '距离劳动节', year: 2026, month: 5, day: 1 },
    { name: '距离回家', year: 2026, month: 7, day: 31 }
];

// 待办事项列表（首次初始化用）
const TODO_ITEMS = [];

// ----- 天气配置（高德地图API，拆分城市编码与显示名称）-----
const WEATHER_CONFIG = {
    apiKey: '7112111965a63ad27d50f79453551cd3',       // 必填，高德Web服务Key
    cityCode: '430105',              // 必填，高德城市编码（例如南京市区320100）
    cityDisplay: '长沙市·开福区',    // 可选，界面显示的城市名称（可自定义格式）
    unit: 'c'                        // 保留，高德默认摄氏度
};
// ==================== 农历API配置 ====================
const LUNAR_CONFIG = {
    apiKey: '3TZXgeIlVtA6YMwz42XL3lqvUI', // 必填：从 https://api.shwgij.com 控制台获取
    enabled: true                      // 设为 false 可临时关闭农历显示
};
// ====================================================