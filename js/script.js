// 多语言数据字典
const translations = {
    zh: {
        title: "同茂地产 - 创领美好生活空间",
        logo_text: "同茂地产",
        nav_home: "首页",
        nav_projects: "精品楼盘",
        nav_about: "关于同茂",
        nav_contact: "联系我们",
        hero_title: "创领美好生活空间",
        hero_desc: "同茂地产致力于为您打造卓越品质的住宅与商业空间，筑就城市美好未来。",
        hero_btn: "探索项目",
        sec_projects: "精品楼盘推荐",
        p1_title: "同茂·翡翠首府",
        p1_desc: "市区罕见1.199超低容积率纯洋房社区，大香山路西侧，规划6栋4层及4栋8层低密改善大宅，匠心筑就诗意栖居新标杆。",
        detail_btn: "了解详情",
        sec_about: "关于同茂地产",
        about_p1: "同茂地产成立于2010年，是一家专注于高端住宅开发、商业地产运营及物业管理的大型综合性房地产企业。",
        about_p2: "多年来，我们秉持“筑诚筑信，精益求精”的品牌理念，足迹遍布多座核心城市，为数十万业主提供了高品质的居住与商业空间。",
        about_p3: "未来，同茂地产将继续紧跟时代步伐，致力于成为可持续发展的城市美好生活服务商。",
        sec_contact: "联系我们",
        c_address_title: "公司地址",
        c_address_content: "河南省平顶山市大香山路同茂·翡翠首府项目营销中心",
        c_phone_title: "咨询热线",
        c_email_title: "电子邮箱",
        footer_text: "&copy; 2026 同茂地产 版权所有 | Tongmao Real Estate. All Rights Reserved."
    },
    en: {
        title: "Tongmao Real Estate - Creating Better Living Spaces",
        logo_text: "Tongmao RE",
        nav_home: "Home",
        nav_projects: "Projects",
        nav_about: "About Us",
        nav_contact: "Contact",
        hero_title: "Creating Better Living Spaces",
        hero_desc: "Tongmao Real Estate is committed to building premium residential and commercial spaces for a brighter urban future.",
        hero_btn: "Explore Projects",
        sec_projects: "Featured Projects",
        p1_title: "Tongmao · Emerald Capital",
        p1_desc: "Featuring a rare ultra-low floor area ratio of 1.199, composed of 4-story and 8-story pure multi-story garden residences on the west of Daxangshan Road, creating a new benchmark for upscale urban living.",
        detail_btn: "Learn More",
        sec_about: "About Tongmao Real Estate",
        about_p1: "Founded in 2010, Tongmao Real Estate is a comprehensive real estate enterprise focusing on high-end residential development, commercial property operation, and property management.",
        about_p2: "Over the years, adhering to the brand philosophy of 'Integrity and Excellence', our footprint spans multiple core cities nationwide, providing high-quality living and business spaces to hundreds of thousands of owners.",
        about_p3: "Looking ahead, Tongmao Real Estate will continue to keep pace with the times and strive to become a sustainable urban lifestyle service provider.",
        sec_contact: "Contact Us",
        c_address_title: "Address",
        c_address_content: "Tongmao Emerald Capital Marketing Center, Daxangshan Road, Pingdingshan, Henan",
        c_phone_title: "Hotline",
        c_email_title: "Email",
        footer_text: "&copy; 2026 Tongmao Real Estate. All Rights Reserved."
    }
};

let currentLang = 'zh';

function switchLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });

    document.title = translations[currentLang].title;
}

document.getElementById('langSwitch').addEventListener('click', switchLanguage);

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
