document.addEventListener('DOMContentLoaded', function() {
    // 滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.product-item, .story-content').forEach((el) => {
        observer.observe(el);
    });

    // 导航栏滚动效果
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const header = document.querySelector('.cyber-header');

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });

    // 产品图片悬停效果
    document.querySelectorAll('.product-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.product-img').style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.querySelector('.product-img').style.transform = 'scale(1)';
        });
    });

    // 鼠标移动光效
    document.addEventListener('mousemove', function(e) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-trail';
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        document.body.appendChild(cursor);
        
        setTimeout(() => {
            cursor.remove();
        }, 1000);
    });

    // 随机故障效果
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.glitch-text');
        glitchElements.forEach(element => {
            if (Math.random() > 0.95) {
                element.style.textShadow = `
                    ${Math.random() * 10}px ${Math.random() * 10}px ${Math.random() * 10}px var(--cyber-primary),
                    ${Math.random() * -10}px ${Math.random() * 10}px ${Math.random() * 10}px var(--cyber-accent)
                `;
                setTimeout(() => {
                    element.style.textShadow = '';
                }, 50);
            }
        });
    }, 100);

    // 添加视差滚动效果
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const offset = window.pageYOffset * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    });
});

// 添加额外的 CSS
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--cyber-primary);
        pointer-events: none;
        mix-blend-mode: screen;
        animation: cursorTrail 1s linear forwards;
        z-index: 9999;
    }

    @keyframes cursorTrail {
        0% {
            opacity: 0.8;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style); 