// 팀 데이터
const teamColors = [
    "#2B3A67", // 경영관리실
    "#5A6D8F", // 전략기획실 (블루퍼플 틸)
    "#B3D5F2", // Aptamil
    "#FFA450", // Dreame
    "#7FC7FF", // 컨텐츠팀
    "#50E3C2", // 고객지원부
    "#6E7A87", // 물류센터
    "#C96BE2"  // 마케팅팀
];

const teamDescriptions = [
    "회사의 전반적인 경영과 관리를 담당하는 핵심 부서입니다.\n재무·인사·법무·리스크 관리 등 운영 안정화를 위한 주요 업무를 총괄하며, \n벤더사로서 플랫폼 제휴와 이해관계자 조율을 맡고 있습니다.",
    "회사의 미래 비전과 전략을 수립하고 실행하는 조직입니다.\n 시장 분석, 유통 채널 확대, 신규 브랜드 발굴 , 직원 인프라 등을 조성해\n 회사의 지속 가능한 성장을 추진합니다.",
    "독일 명품 분유 '압타밀'의 공식 대행 유통과 마케팅을 담당합니다. \n제품 수입사와의 협업, 플랫폼별 입점 관리, 신뢰 기반 리뷰 확보 등을 통해 \n프리미엄 유아식품 시장에서의 입지를 확대합니다.",
    "프리미엄 가전 브랜드 '드리미(Dreame)'의 로봇청소기 라인을 공식 대행 유통합니다. \n제품 정보 구성, 리뷰 마케팅, 채널 전략을 통해 가전 분야에서의 브랜드 신뢰도를 강화합니다.",
    "브랜드 정체성과 메시지를 시각적으로 구현하는 콘텐츠 전담 조직입니다. \n상세페이지, 영상, 디자인 등 다양한 미디어를 통해 소비자와의 정서적 연결을 구축합니다.",
    "고객 만족을 최우선으로 하는 지원 부서입니다. \n문의 응대, 사용법 안내, A/S 연계 등 전방위 고객 지원을 담당하며,\n VOC를 기반으로 한 개선 루프를 운영합니다.",
    "제품 보관 및 배송을 총괄하는 물류 센터입니다. 외부 물류 파트너사와 협업하여\n 재고 관리, 빠른 출고, 정확한 배송을 통해 고객 신뢰를 구축합니다.",
    "브랜드 인지도 향상과 매출 성장을 위한 통합 마케팅을 기획합니다. \n리뷰 기반 디지털 광고, 타겟 광고, 프로모션 전략을 통해 플랫폼 내 경쟁력을 확보합니다."
];

// 조직도 데이터
const orgData = {
    root: {
        name: "대표이사 강필구",
        floor: "",
        image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=강필구",
    },
    depts: [
        // === 1: 경영진 ===
        {
            title: "경영관리실",
            count: 7,
            floor: "2F",
            members: [
                {
                    name: "강필구 (대표이사)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=강필구",
                },
                {
                    name: "신선일 (이사)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=신선일",
                },
                {
                    name: "유은주 (과장)",
                    image: "https://via.placeholder.com/200x200/f59e0b/ffffff?text=유은주",
                },
                {
                    name: "정아린 (사원)",
                    image: "https://via.placeholder.com/200x200/ef4444/ffffff?text=정아린",
                },
                {
                    name: "김세진 (사원)",
                    image: "https://via.placeholder.com/200x200/8b5cf6/ffffff?text=김세진",
                },
                {
                    name: "장주희 (사원)",
                    image: "https://via.placeholder.com/200x200/06b6d4/ffffff?text=장주희",
                },
                {
                    name: "최혁준 (사원)",
                    image: "https://via.placeholder.com/200x200/84cc16/ffffff?text=최혁준",
                },
            ],
        },
        // === 2: 전략부서 ===
        {
            title: "전략기획실",
            count: 3,
            floor: "2F",
            members: [
                {
                    name: "박병도 (실장)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=박병도",
                },
                {
                    name: "강병현 (팀장)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=강병현",
                    motto: "다 계획이 있eibe ",
                },
                {
                    name: "지윤환 (과장)",
                    image: "people/지윤환.png",
                    motto: "다 계획이 있eibe ",
                },
            ],
        },
        // === 3: 핵심  ===
        {
            title: "Aptamil",
            count: 18,
            floor: "2F",
            members: [
                {
                    name: "김정준 (본부장)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=김정준",
                },
                {
                    name: "김민욱 (팀장)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=김민욱",
                },
                {
                    name: "김영훈 (파트장)",
                    image: "https://via.placeholder.com/200x200/84cc16/ffffff?text=김영훈",
                },
                {
                    name: "김예진 (과장)",
                    image: "https://via.placeholder.com/200x200/f59e0b/ffffff?text=김예진",
                },
                {
                    name: "김은정 (대리)",
                    image: "https://via.placeholder.com/200x200/ef4444/ffffff?text=김은정",
                },
                {
                    name: "박효진 (대리)",
                    image: "https://via.placeholder.com/200x200/8b5cf6/ffffff?text=박효진",
                },
                {
                    name: "최은영 (대리)",
                    image: "https://via.placeholder.com/200x200/06b6d4/ffffff?text=최은영",
                },
                {
                    name: "박지영 (대리)",
                    image: "https://via.placeholder.com/200x200/8b5cf6/ffffff?text=박지영",
                },
                {
                    name: "신유정 (매니져)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=신유정",
                },
                {
                    name: "최아리찬 (사원)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=최아리찬",
                },
                {
                    name: "이산하 (사원)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=이산하",
                },
                {
                    name: "권재은 (사원)",
                    image: "https://via.placeholder.com/200x200/ef4444/ffffff?text=권재은",
                },
                {
                    name: "이지혜 (사원)",
                    image: "https://via.placeholder.com/200x200/84cc16/ffffff?text=이지혜",
                },
                {
                    name: "송예진 (사원)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=송예진",
                },
                {
                    name: "형성인 (사원)",
                    image: "https://via.placeholder.com/200x200/f59e0b/ffffff?text=형성인",
                },
                {
                    name: "신선경 (사원,재택)",
                    image: "https://via.placeholder.com/200x200/ef4444/ffffff?text=신선경",
                },
                {
                    name: "서정민 (사원)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=서정민",
                },
                {
                    name: "박종호 (수습)",
                    image: "https://via.placeholder.com/200x200/06b6d4/ffffff?text=박종호",
                },
                {
                    name: "조성익 (수습)",
                    image: "https://via.placeholder.com/200x200/06b6d4/ffffff?text=조성익",
                },
            ],
        },
        // === 4:  2 ===
        {
            title: "Dreame",
            count: 16,
            floor: "4F",
            members: [
                {
                    name: "강병훈 (팀장)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=강병훈",
                },
                {
                    name: "윤성규 (파트장)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=윤성규",
                },
                {
                    name: "이영우 (과장)",
                    image: "https://via.placeholder.com/200x200/f59e0b/ffffff?text=이영우",
                },
                {
                    name: "홍성수 (과장)",
                    image: "https://via.placeholder.com/200x200/ef4444/ffffff?text=홍성수",
                },
                {
                    name: "황재완 (대리)",
                    image: "https://via.placeholder.com/200x200/8b5cf6/ffffff?text=황재완",
                },
                {
                    name: "설길호 (대리)",
                    image: "https://via.placeholder.com/200x200/06b6d4/ffffff?text=설길호",
                },
                {
                    name: "김정호 (대리)",
                    image: "https://via.placeholder.com/200x200/84cc16/ffffff?text=김정호",
                },
                {
                    name: "박민찬 (주임)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=박민찬",
                },
                {
                    name: "이수진 (주임)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=이수진",
                },
                {
                    name: "정성원 (주임)",
                    image: "https://via.placeholder.com/200x200/f59e0b/ffffff?text=정성원",
                },
                {
                    name: "권도연 (주임)",
                    image: "https://via.placeholder.com/200x200/ef4444/ffffff?text=권도연",
                },
                {
                    name: "이다현 (사원)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=이다현",
                },
                {
                    name: "이윤경 (사원)",
                    image: "https://via.placeholder.com/200x200/84cc16/ffffff?text=이윤경",
                },
                {
                    name: "조하정 (수습)",
                    image: "https://via.placeholder.com/200x200/8b5cf6/ffffff?text=조하정",
                },
                {
                    name: "변해형 (수습)",
                    image: "https://via.placeholder.com/200x200/06b6d4/ffffff?text=변해형",
                },
                {
                    name: "최유선 (수습)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=최유선",
                },
            ],
        },
        // === 5: 지원부서 ===
        {
            title: "컨텐츠팀",
            count: 4,
            floor: "4F",
            members: [
                {
                    name: "지연아 (과장)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=지연아",
                },
                {
                    name: "조예은 (대리)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=조예은",
                },
                {
                    name: "조민지 (주임)",
                    image: "https://via.placeholder.com/200x200/f59e0b/ffffff?text=조민지",
                },
                {
                    name: "박규원 (사원)",
                    image: "https://via.placeholder.com/200x200/ef4444/ffffff?text=박규원",
                },
            ],
        },
        // === 6: 고객지원 ===
        {
            title: "고객지원부",
            count: 6,
            floor: "3F",
            members: [
                {
                    name: "신선주 (팀장)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=신선주",
                },
                {
                    name: "최이슬 (과장)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=최이슬",
                },
                {
                    name: "박주영 (사원)",
                    image: "https://via.placeholder.com/200x200/84cc16/ffffff?text=박주영",
                },
                {
                    name: "노가을 (수습)",
                    image: "https://via.placeholder.com/200x200/ef4444/ffffff?text=노가을",
                },
                {
                    name: "장주현 (수습)",
                    image: "https://via.placeholder.com/200x200/8b5cf6/ffffff?text=장주현",
                },
                {
                    name: "최윤민(수습)",
                    image: "https://via.placeholder.com/200x200/8b5cf6/ffffff?text=최윤민",
                },
            ],
        },
        // === 7: 외부부서 ===
        {
            title: "물류센터",
            count: 6,
            floor: "남양주,용인",
            members: [
                {
                    name: "신선희 (이사)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=신선희",
                },
                {
                    name: "강희구 (이사)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=강희구",
                },
                {
                    name: "고성철 (과장)",
                    image: "https://via.placeholder.com/200x200/f59e0b/ffffff?text=고성철",
                },
                {
                    name: "손선남 (과장)",
                    image: "https://via.placeholder.com/200x200/ef4444/ffffff?text=손선남",
                },
                {
                    name: "백인호 (대리)",
                    image: "https://via.placeholder.com/200x200/8b5cf6/ffffff?text=백인호",
                },
                {
                    name: "김종희 (사원)",
                    image: "https://via.placeholder.com/200x200/06b6d4/ffffff?text=김종희",
                },
            ],
        },
        // === 8: 마케팅팀 ===
        {
            title: "마케팅팀",
            count: 3,
            floor: "2F",
            members: [
                {
                    name: "김마케팅 (팀장)",
                    image: "https://via.placeholder.com/200x200/1e40af/ffffff?text=김마케팅",
                },
                {
                    name: "이광고 (대리)",
                    image: "https://via.placeholder.com/200x200/10b981/ffffff?text=이광고",
                },
                {
                    name: "박프로모션 (사원)",
                    image: "https://via.placeholder.com/200x200/f59e0b/ffffff?text=박프로모션",
                },
            ],
        },
    ],
};

// 팀원 데이터 변환 함수
function convertOrgDataToTeamMembers() {
    const teamMembers = {};
    
    orgData.depts.forEach(dept => {
        const teamName = dept.title;
        teamMembers[teamName] = dept.members.map(member => {
            // 이름과 직급 분리
            const nameMatch = member.name.match(/^(.+?)\s*\((.+?)\)$/);
            const name = nameMatch ? nameMatch[1] : member.name;
            const position = nameMatch ? nameMatch[2] : '';
            
            return {
                name: name,
                position: position,
                photo: member.image,
                motto: member.motto || null
            };
        });
    });
    
    return teamMembers;
}

const teamMembers = convertOrgDataToTeamMembers();

const teamNames = [
    "경영관리실",
    "전략기획실",
    "Aptamil",
    "Dreame",
    "컨텐츠팀",
    "고객지원부",
    "물류센터",
    "마케팅팀"
];

const teamIcons = [
    "building-office", "chart-bar", "heart", "cpu-chip", "paint-brush", "chat-bubble-left-right", "truck", "megaphone"
];

// Heroicons 경로 매핑
const heroIconPaths = {
    "building-office": "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-6.75 4.5h6.75m-6.75 4.5h6.75m-6.75 4.5h6.75",
    "chart-bar": "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
    "heart": "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
    "cpu-chip": "M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3",
    "paint-brush": "M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184",
    "chat-bubble-left-right": "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    "truck": "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
    "megaphone": "M10.5 1.875c1.437 0 2.573.45 3.178 1.074.605.623.822 1.401.822 2.301 0 .9-.217 1.678-.822 2.301-.605.623-1.741 1.074-3.178 1.074-1.437 0-2.573-.45-3.178-1.074-.605-.623-.822-1.401-.822-2.301 0-.9.217-1.678.822-2.301C7.927 2.325 9.063 1.875 10.5 1.875ZM4.5 15.75c0-.621.504-1.125 1.125-1.125h9c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-9c-.621 0-1.125-.504-1.125-1.125v-3.75ZM19.5 8.25c0 2.485-2.099 4.5-4.688 4.5-1.935 0-3.597-1.126-4.312-2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 8.25 3 10.265 3 12.75c0 2.485 2.099 4.5 4.688 4.5 1.935 0 3.597-1.126 4.312-2.733.715 1.607 2.377 2.733 4.313 2.733 2.589 0 4.688-2.015 4.688-4.5Z"
};

function getHeroIconPath(iconName) {
    return heroIconPaths[iconName] || heroIconPaths["building-office"];
}

// 마우스 트레일 효과
class MouseTrail {
    constructor() {
        this.particles = [];
        this.maxParticles = 20;
        this.init();
    }

    init() {
        for (let i = 0; i < this.maxParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'mouse-trail-particle';
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: linear-gradient(45deg, #667eea, #764ba2);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                opacity: 0;
                transform: scale(0);
            `;
            document.body.appendChild(particle);
            this.particles.push(particle);
        }
    }

    update(x, y) {
        this.particles.forEach((particle, index) => {
            setTimeout(() => {
                gsap.to(particle, {
                    x: x,
                    y: y,
                    opacity: 1,
                    scale: 1,
                    duration: 0.1,
                    ease: "power2.out"
                });
                
                gsap.to(particle, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                    delay: 0.1,
                    ease: "power2.in"
                });
            }, index * 20);
        });
    }
}

// Three.js 배경 애니메이션
class BackgroundAnimation {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.particles = [];
        this.animationId = null;
        this.mouseX = 0;
        this.mouseY = 0;
        
        this.init();
    }

    init() {
        const container = document.getElementById('background-canvas');
        if (!container) {
            console.error('Background canvas container not found');
            return;
        }
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);

        this.camera.position.z = 5;

        // 파티클 생성
        this.createParticles();
        
        // 애니메이션 시작
        this.animate();
        
        // 리사이즈 이벤트
        window.addEventListener('resize', () => this.onWindowResize());
    }

    createParticles() {
        const geometry = new THREE.SphereGeometry(0.02, 8, 8);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.6
        });

        for (let i = 0; i < 200; i++) {
            const particle = new THREE.Mesh(geometry, material);
            particle.position.x = (Math.random() - 0.5) * 20;
            particle.position.y = (Math.random() - 0.5) * 20;
            particle.position.z = (Math.random() - 0.5) * 10;
            particle.velocity = {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            };
            particle.originalPosition = {
                x: particle.position.x,
                y: particle.position.y,
                z: particle.position.z
            };
            this.particles.push(particle);
            this.scene.add(particle);
        }
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        // 파티클 움직임
        this.particles.forEach((particle, index) => {
            // 마우스와의 거리에 따른 반응
            const mouseInfluence = 0.0001;
            const distanceX = this.mouseX - particle.position.x;
            const distanceY = this.mouseY - particle.position.y;
            
            particle.position.x += particle.velocity.x + distanceX * mouseInfluence;
            particle.position.y += particle.velocity.y + distanceY * mouseInfluence;
            particle.position.z += particle.velocity.z;

            // 경계 체크
            if (Math.abs(particle.position.x) > 10) particle.velocity.x *= -1;
            if (Math.abs(particle.position.y) > 10) particle.velocity.y *= -1;
            if (Math.abs(particle.position.z) > 5) particle.velocity.z *= -1;

            // 회전 효과
            particle.rotation.x += 0.01;
            particle.rotation.y += 0.01;
            
            // 크기 변화
            const scale = 1 + Math.sin(Date.now() * 0.001 + index) * 0.1;
            particle.scale.set(scale, scale, scale);
        });

        this.renderer.render(this.scene, this.camera);
    }

    updateMouse(x, y) {
        this.mouseX = (x - window.innerWidth / 2) * 0.01;
        this.mouseY = (y - window.innerHeight / 2) * 0.01;
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// 팀 카드 생성
function createTeamCards() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) {
        console.error('Team grid container not found');
        return;
    }
    
    teamNames.forEach((name, index) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.style.setProperty('--team-color', teamColors[index]);
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="card-flipper">
                <!-- 카드 앞면 -->
                <div class="card-front">
                    <div class="team-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="${getHeroIconPath(teamIcons[index])}" />
                        </svg>
                    </div>
                    <div class="team-info">
                        <h3>${name}</h3>
                        <div class="team-category">${getTeamCategory(name)}</div>
                    </div>
                    <div class="flip-hint">호버하여 상세보기</div>
                </div>
                
                <!-- 카드 뒷면 -->
                <div class="card-back">
                    <h3>${name}</h3>
                    <div class="team-description">
                        ${teamDescriptions[index]}
                    </div>
                </div>
            </div>
            <div class="card-glow"></div>
        `;
        
        // 호버 시 추가 효과 (데스크톱)
        card.addEventListener('mouseenter', () => {
            addFloatingEffect(card);
            addGlowEffect(card);
            createRippleEffect(card);
        });
        
        card.addEventListener('mouseleave', () => {
            removeFloatingEffect(card);
            removeGlowEffect(card);
        });

        // 마우스 따라다니는 조명 효과
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
        
        // 클릭 이벤트 추가
        card.addEventListener('click', () => {
            createClickParticles(card);
            showFullscreenModal(name, teamIcons[index], getTeamCategory(name), teamDescriptions[index], teamColors[index]);
        });
        
        // 터치 이벤트 (모바일)
        let touchStartTime = 0;
        let touchEndTime = 0;
        let isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isMobile) {
            // 모바일에서는 플립과 모달 모두 지원
            card.addEventListener('touchstart', (e) => {
                touchStartTime = new Date().getTime();
                e.preventDefault();
            });
            
            card.addEventListener('touchend', (e) => {
                touchEndTime = new Date().getTime();
                const touchDuration = touchEndTime - touchStartTime;
                
                // 짧은 터치는 플립, 길게 누르기는 모달
                if (touchDuration < 300) {
                    toggleCardFlip(card);
                } else if (touchDuration > 500) {
                    createClickParticles(card);
                    showFullscreenModal(name, teamIcons[index], getTeamCategory(name), teamDescriptions[index], teamColors[index]);
                }
                
                e.preventDefault();
            });
        } else {
            // 데스크톱에서는 기존 호버 플립 유지
            card.addEventListener('touchstart', (e) => {
                touchStartTime = new Date().getTime();
                e.preventDefault();
            });
            
            card.addEventListener('touchend', (e) => {
                touchEndTime = new Date().getTime();
                const touchDuration = touchEndTime - touchStartTime;
                
                // 짧은 터치만 플립 (길게 누르기 방지)
                if (touchDuration < 500) {
                    toggleCardFlip(card);
                }
                
                e.preventDefault();
            });
        }
        
        teamGrid.appendChild(card);
    });
}

function getTeamCategory(teamName) {
    const categories = {
        "경영관리실": "경영지원",
        "전략기획실": "전략기획",
        "Aptamil": "브랜드관리",
        "Dreame": "브랜드관리",
        "컨텐츠 팀": "크리에이티브",
        "고객지원부": "고객서비스",
        "물류센터": "물류운영",
        "마케팅팀": "마케팅"
    };
    return categories[teamName] || "기타";
}

function addFloatingEffect(card) {
    gsap.to(card, {
        y: -10,
        duration: 0.4,
        ease: "power2.out"
    });
}

function removeFloatingEffect(card) {
    gsap.to(card, {
        y: 0,
        duration: 0.4,
        ease: "power2.out"
    });
}

function addGlowEffect(card) {
    const glow = card.querySelector('.card-glow');
    if (glow) {
        gsap.to(glow, {
            opacity: 1,
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out"
        });
    }
}

function removeGlowEffect(card) {
    const glow = card.querySelector('.card-glow');
    if (glow) {
        gsap.to(glow, {
            opacity: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    }
}

function createRippleEffect(card) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, var(--team-color)20 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 1;
    `;
    
    card.appendChild(ripple);
    
    gsap.to(ripple, {
        width: '200px',
        height: '200px',
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => ripple.remove()
    });
}

function createClickParticles(card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const teamColor = getComputedStyle(card).getPropertyValue('--team-color');
    
    // 파티클 개수 대폭 증가
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = 15 + Math.random() * 25; // 15-40px 랜덤 크기
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${teamColor};
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            left: ${centerX}px;
            top: ${centerY}px;
            box-shadow: 0 0 20px ${teamColor};
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 20) * Math.PI * 2;
        const distance = 150 + Math.random() * 100; // 더 멀리 퍼짐
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        gsap.to(particle, {
            x: endX - centerX,
            y: endY - centerY,
            opacity: 0,
            scale: 0,
            duration: 1.5,
            ease: "power2.out",
            onComplete: () => particle.remove()
        });
    }
    
    // 추가로 큰 파티클들도 생성
    for (let i = 0; i < 5; i++) {
        const bigParticle = document.createElement('div');
        const bigSize = 30 + Math.random() * 40; // 30-70px 큰 파티클
        bigParticle.style.cssText = `
            position: fixed;
            width: ${bigSize}px;
            height: ${bigSize}px;
            background: radial-gradient(circle, ${teamColor}, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            left: ${centerX}px;
            top: ${centerY}px;
            box-shadow: 0 0 40px ${teamColor};
        `;
        
        document.body.appendChild(bigParticle);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 200 + Math.random() * 150;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        gsap.to(bigParticle, {
            x: endX - centerX,
            y: endY - centerY,
            opacity: 0,
            scale: 0,
            duration: 2,
            ease: "power2.out",
            onComplete: () => bigParticle.remove()
        });
    }
}

// 카드 플립 토글 함수
function toggleCardFlip(card) {
    const flipper = card.querySelector('.card-flipper');
    const isFlipped = card.classList.contains('touch-flipped');
    
    if (isFlipped) {
        card.classList.remove('touch-flipped');
        gsap.to(flipper, {
            rotateY: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        });
    } else {
        card.classList.add('touch-flipped');
        gsap.to(flipper, {
            rotateY: 180,
            duration: 0.8,
            ease: "back.out(1.7)"
        });
    }
}

// 전체화면 모달 표시
function showFullscreenModal(name, icon, category, description, color) {
    const modal = document.getElementById('fullscreenModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const teamMembersSection = document.getElementById('teamMembersSection');
    const teamMembersGrid = document.getElementById('teamMembersGrid');
    
    // 모달 내용 설정
    modalIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="${getHeroIconPath(icon)}" />
        </svg>
    `;
    modalTitle.textContent = name;
    modalCategory.textContent = category;
    modalDescription.textContent = description;
    
    // 팀 색상 적용
    modalIcon.style.background = color;
    
    // 팀원 정보 생성
    const members = teamMembers[name] || [];
    if (members.length > 0) {
        teamMembersSection.style.display = 'block';
        teamMembersGrid.innerHTML = '';
        
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'team-member-card';
            memberCard.style.setProperty('--team-color', color);
            
            memberCard.innerHTML = `
                <img src="${member.photo}" alt="${member.name}" class="team-member-photo">
                <div class="team-member-name">${member.name}</div>
                <div class="team-member-position">${member.position}</div>
                ${member.motto ? `<div class="team-member-motto">"${member.motto}"</div>` : ''}
            `;
            
            // 팀원 카드 클릭 이벤트 (이벤트 버블링 방지)
            memberCard.addEventListener('click', (e) => {
                e.stopPropagation();
                showMemberPhotoModal(member, color);
            });
            
            teamMembersGrid.appendChild(memberCard);
        });
    } else {
        teamMembersSection.style.display = 'none';
    }
    
    // 모달 표시
    modal.classList.add('active');
    
    // 스크롤 방지
    document.body.style.overflow = 'hidden';
    
    // 모달 스크롤 힌트 초기화
    setTimeout(initModalScrollHint, 100);
}

// 전체화면 모달 닫기
function closeFullscreenModal() {
    const modal = document.getElementById('fullscreenModal');
    modal.classList.remove('active');
    
    // 스크롤 복원
    document.body.style.overflow = '';
}

// 팀원 사진 모달 표시
function showMemberPhotoModal(member, teamColor) {
    const photoModal = document.getElementById('memberPhotoModal');
    const memberPhotoName = document.getElementById('memberPhotoName');
    const memberPhotoPosition = document.getElementById('memberPhotoPosition');
    const memberPhotoImage = document.getElementById('memberPhotoImage');
    
    // 팀원 정보 설정
    memberPhotoName.textContent = member.name;
    
    // 직급과 모토 표시
    let positionText = member.position;
    if (member.motto) {
        positionText += `\n"${member.motto}"`;
    }
    memberPhotoPosition.textContent = positionText;
    
    // 이미지 URL 처리 (placeholder 이미지인 경우 크기 조정)
    let imageUrl = member.photo;
    if (imageUrl.includes('via.placeholder.com')) {
        imageUrl = imageUrl.replace('200x200', '800x800');
    } else if (imageUrl.includes('w=150&h=150')) {
        imageUrl = imageUrl.replace('w=150&h=150', 'w=800&h=800');
    }
    
    memberPhotoImage.src = imageUrl;
    memberPhotoImage.alt = `${member.name} 사진`;
    
    // 모달 표시
    photoModal.classList.add('active');
    
    // 스크롤 방지
    document.body.style.overflow = 'hidden';
}

// 팀원 사진 모달 닫기
function closeMemberPhotoModal() {
    const photoModal = document.getElementById('memberPhotoModal');
    photoModal.classList.remove('active');
    
    // 스크롤 복원
    document.body.style.overflow = '';
}

// 모달 이벤트 리스너 설정
function initModalEvents() {
    const modal = document.getElementById('fullscreenModal');
    const closeBtn = document.getElementById('closeModal');
    const photoModal = document.getElementById('memberPhotoModal');
    const closePhotoBtn = document.getElementById('closeMemberPhoto');
    
    // 팀 모달 닫기 버튼 클릭
    closeBtn.addEventListener('click', closeFullscreenModal);
    
    // 팀원 사진 모달 닫기 버튼 클릭
    closePhotoBtn.addEventListener('click', closeMemberPhotoModal);
    
    // 팀 모달 배경 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeFullscreenModal();
        }
    });
    
    // 팀원 사진 모달 배경 클릭 시 닫기
    photoModal.addEventListener('click', (e) => {
        if (e.target === photoModal) {
            closeMemberPhotoModal();
        }
    });
    
    // ESC 키로 닫기 (최상위 모달부터)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (photoModal.classList.contains('active')) {
                closeMemberPhotoModal();
            } else if (modal.classList.contains('active')) {
                closeFullscreenModal();
            }
        }
    });
}

// 마우스 움직임 추적
function initMouseTracking() {
    let mouseTrail;
    let backgroundAnimation;
    
    // 마우스 트레일 초기화
    mouseTrail = new MouseTrail();
    
    // 배경 애니메이션 초기화
    backgroundAnimation = new BackgroundAnimation();
    
    document.addEventListener('mousemove', (e) => {
        window.mouseX = e.clientX - window.innerWidth / 2;
        window.mouseY = e.clientY - window.innerHeight / 2;
        
        if (mouseTrail) {
            mouseTrail.update(e.clientX, e.clientY);
        }
        
        if (backgroundAnimation) {
            backgroundAnimation.updateMouse(e.clientX, e.clientY);
        }
    });
    
    return { mouseTrail, backgroundAnimation };
}

// 스크롤 애니메이션
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // 순차적 애니메이션
                const index = parseInt(entry.target.dataset.index);
                gsap.from(entry.target, {
                    y: 100,
                    opacity: 0,
                    rotationX: 45,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "back.out(1.7)"
                });
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.team-card').forEach(card => {
        observer.observe(card);
    });
}

// 타이핑 애니메이션
function initTypingAnimation() {
    const title = document.querySelector('.typing-text');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid #fff';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // 타이핑 완료 후 커서 깜빡임
            setTimeout(() => {
                title.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// 모달 스크롤 힌트 클릭 이벤트
function initModalScrollHint() {
    const modalScrollHint = document.querySelector('.modal-scroll-hint-arrow');
    if (modalScrollHint) {
        modalScrollHint.addEventListener('click', () => {
            const teamMembersSection = document.getElementById('teamMembersSection');
            if (teamMembersSection) {
                teamMembersSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    try {
        // 타이핑 애니메이션 시작
        initTypingAnimation();
        
        // 마우스 추적 및 배경 애니메이션 초기화
        const { mouseTrail, backgroundAnimation } = initMouseTracking();
        
        // 팀 카드 생성
        createTeamCards();
        
        // 스크롤 애니메이션 초기화
        setTimeout(initScrollAnimations, 1000);
        

        
        // 페이지 언로드 시 정리
        window.addEventListener('beforeunload', () => {
            if (backgroundAnimation) {
                backgroundAnimation.destroy();
            }
        });
        
        // 모달 이벤트 리스너 설정
        initModalEvents();
        
        console.log('Team introduction page initialized successfully!');
    } catch (error) {
        console.error('Error initializing page:', error);
    }
}); 