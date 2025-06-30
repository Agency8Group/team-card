// 팀 데이터
const teamColors = [
    "#2B3A67", // 경영관리실
    "#5A6D8F", // 전략기획실 (블루퍼플 틸)
    "#B3D5F2", // 압타밀 팀
    "#FFA450", // 드리미 팀
    "#7FC7FF", // 컨텐츠 팀
    "#50E3C2", // 고객지원부
    "#6E7A87", // 물류센터
    "#C96BE2"  // 마케팅팀
];

const teamDescriptions = [
    "회사의 전반적인 경영과 관리를 담당하는 핵심 부서입니다. 재무·인사·법무·리스크 관리 등 운영 안정화를 위한 주요 업무를 총괄하며, 벤더사로서 플랫폼 제휴와 이해관계자 조율을 맡고 있습니다.",
    "회사의 미래 비전과 전략을 수립하고 실행하는 조직입니다. 시장 분석, 유통 채널 확대, 신규 브랜드 발굴 , 직원 인프라 등을 조성해 회사의 지속 가능한 성장을 추진합니다.",
    "독일 명품 분유 '압타밀'의 공식 대행 유통과 마케팅을 담당합니다. 제품 수입사와의 협업, 플랫폼별 입점 관리, 신뢰 기반 리뷰 확보 등을 통해 프리미엄 유아식품 시장에서의 입지를 확대합니다.",
    "프리미엄 가전 브랜드 '드리미(Dreame)'의 로봇청소기 라인을 공식 대행 유통합니다. 제품 정보 구성, 리뷰 마케팅, 채널 전략을 통해 가전 분야에서의 브랜드 신뢰도를 강화합니다.",
    "브랜드 정체성과 메시지를 시각적으로 구현하는 콘텐츠 전담 조직입니다. 상세페이지, 영상, 디자인 등 다양한 미디어를 통해 소비자와의 정서적 연결을 구축합니다.",
    "고객 만족을 최우선으로 하는 지원 부서입니다. 문의 응대, 사용법 안내, A/S 연계 등 전방위 고객 지원을 담당하며, VOC를 기반으로 한 개선 루프를 운영합니다.",
    "제품 보관 및 배송을 총괄하는 물류 센터입니다. 외부 물류 파트너사와 협업하여 재고 관리, 빠른 출고, 정확한 배송을 통해 고객 신뢰를 구축합니다.",
    "브랜드 인지도 향상과 매출 성장을 위한 통합 마케팅을 기획합니다. 리뷰 기반 디지털 광고, 타겟 광고, 프로모션 전략을 통해 플랫폼 내 경쟁력을 확보합니다."
];

const teamNames = [
    "경영관리실",
    "전략기획실",
    "압타밀 팀",
    "드리미 팀",
    "컨텐츠 팀",
    "고객지원부",
    "물류센터",
    "마케팅팀"
];

const teamIcons = [
    "🏢", "📊", "🍼", "🤖", "🎨", "💬", "📦", "📢"
];

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
                    <div class="team-icon">${teamIcons[index]}</div>
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
        
        // 클릭 이벤트 추가
        card.addEventListener('click', () => {
            showFullscreenModal(name, teamIcons[index], getTeamCategory(name), teamDescriptions[index], teamColors[index]);
        });
        
        // 터치 이벤트 (모바일)
        let touchStartTime = 0;
        let touchEndTime = 0;
        
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
        
        teamGrid.appendChild(card);
    });
}

function getTeamCategory(teamName) {
    const categories = {
        "경영관리실": "경영지원",
        "전략기획실": "전략기획",
        "압타밀 팀": "브랜드관리",
        "드리미 팀": "브랜드관리",
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

// 카드 플립 토글 함수
function toggleCardFlip(card) {
    const flipper = card.querySelector('.card-flipper');
    const isFlipped = card.classList.contains('touch-flipped');
    
    if (isFlipped) {
        card.classList.remove('touch-flipped');
        gsap.to(flipper, {
            rotateY: 0,
            duration: 0.6,
            ease: "power2.inOut"
        });
    } else {
        card.classList.add('touch-flipped');
        gsap.to(flipper, {
            rotateY: 180,
            duration: 0.6,
            ease: "power2.inOut"
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
    
    // 모달 내용 설정
    modalIcon.textContent = icon;
    modalTitle.textContent = name;
    modalCategory.textContent = category;
    modalDescription.textContent = description;
    
    // 팀 색상 적용
    modalIcon.style.background = color;
    
    // 모달 표시
    modal.classList.add('active');
    
    // 스크롤 방지
    document.body.style.overflow = 'hidden';
}

// 전체화면 모달 닫기
function closeFullscreenModal() {
    const modal = document.getElementById('fullscreenModal');
    modal.classList.remove('active');
    
    // 스크롤 복원
    document.body.style.overflow = '';
}

// 모달 이벤트 리스너 설정
function initModalEvents() {
    const modal = document.getElementById('fullscreenModal');
    const closeBtn = document.getElementById('closeModal');
    
    // 닫기 버튼 클릭
    closeBtn.addEventListener('click', closeFullscreenModal);
    
    // 모달 배경 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeFullscreenModal();
        }
    });
    
    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeFullscreenModal();
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

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    try {
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