function closeDevelopmentBanner() {
    document.getElementById('developmentBanner').style.display = 'none';
}

// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
}

// Função para abrir e fechar modais de login
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
    document.querySelector(".login-container").style.display = "none"; // Esconde o botão "Entrar"
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
    document.querySelector(".login-container").style.display = "flex"; // Mostra o botão "Entrar" novamente
}

// Função para abrir e fechar modais de criação de conta
function openRegisterModal() {
    document.getElementById("registerModal").style.display = "block";
    document.querySelector(".login-container").style.display = "none";
}

function closeRegisterModal() {
    document.getElementById("registerModal").style.display = "none";
    document.querySelector(".login-container").style.display = "flex";
}

// Funções para abrir e fechar Política de Privacidade
function openPrivacyModal() {
    document.getElementById("privacyModal").style.display = "block";
}

function closePrivacyModal() {
    document.getElementById("privacyModal").style.display = "none";
}

// Funções para abrir e fechar Termos de Serviço
function openTermsModal() {
    document.getElementById("termsModal").style.display = "block";
}

function closeTermsModal() {
    document.getElementById("termsModal").style.display = "none";
}


// Função para validar senha
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+=/_<>!@#$])[A-Za-z\d+=/_<>!@#$]{5,}$/;
    return regex.test(password);
}

// Função para tratar o envio do formulário de login
function handleLoginSubmit(event) {
    event.preventDefault();
    const emailOrUsername = document.getElementById('login-email-username').value;
    const password = document.getElementById('login-password').value;
    const loginError = document.getElementById('login-error');

    // Simulação de verificação de usuários registrados
    const registeredUsers = [
        { email: 'usuario1@gmail.com', username: 'usuario1', password: 'Senha@123' },
        { email: 'usuario2@yahoo.com', username: 'usuario2', password: 'Senha@456' }
    ];

    const user = registeredUsers.find(
        user => (user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password
    );

    if (!user) {
        loginError.textContent = 'Credenciais inválidas. Verifique o email, usuário ou senha.';
        return;
    }

    loginError.textContent = '';
    alert('Login bem-sucedido!');

    // Redirecionar para a página principal
window.location.href = '/pagina-principal/index.html';

    // Limpar os campos após login bem-sucedido
    document.getElementById('login-email-username').value = '';
    document.getElementById('login-password').value = '';
}

// Função para tratar o envio do formulário de registro
function handleSignupSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const signupError = document.getElementById('signup-error');

    if (!validateEmail(email)) {
        signupError.textContent = 'Por favor, insira um email válido.';
        return;
    }

    if (!validatePassword(password)) {
        signupError.textContent =
            'A senha deve ter pelo menos 6 caracteres e incluir números, letras maiúsculas, letras minúsculas e caracteres especiais: +, =, /, _, <, >, !, @, #, $.';
        return;
    }

    if (password !== confirmPassword) {
        signupError.textContent = 'As senhas não coincidem.';
        return;
    }

    // Simulação de Criação de Conta
    const registeredUsers = ['usuario1@gmail.com', 'usuario2@yahoo.com'];
    if (registeredUsers.includes(email)) {
        signupError.textContent = 'Usuário já cadastrado.';
        return;
    }

    signupError.textContent = '';
    alert('Conta criada com sucesso!');

    // Limpar campos após criação de conta
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('signup-confirm-password').value = '';
}

// Fechar qualquer modal ao clicar fora dele
window.onclick = function(event) {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const privacyModal = document.getElementById("privacyModal");
    const termsModal = document.getElementById("termsModal");

    if (event.target === loginModal) closeLoginModal();
    if (event.target === registerModal) closeRegisterModal();
    if (event.target === privacyModal) closePrivacyModal();
    if (event.target === termsModal) closeTermsModal();
};

const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        menu.classList.remove("active");
    });
});

// Exibir janela de cookies após 5 segundos
setTimeout(() => {
  const cookieConsent = document.getElementById('cookieConsent');
  const hasConsent = localStorage.getItem('cookieConsent');

  if (!hasConsent) {
    cookieConsent.classList.remove('hidden');
  }
}, 5000);

// Gerenciar ações dos botões
document.getElementById('acceptCookies').addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  hideCookieConsent();
});

document.getElementById('rejectCookies').addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'rejected');
  hideCookieConsent();
});

// Função para ocultar a janela
function hideCookieConsent() {
  const cookieConsent = document.getElementById('cookieConsent');
  cookieConsent.classList.add('hidden');
}

// Abrir o modal de Definições de Cookies
function openCookieSettingsModal() {
  const modal = document.getElementById('cookieSettingsModal');
  modal.style.display = 'block';
}

// Fechar o modal de Definições de Cookies
function closeCookieSettingsModal() {
  const modal = document.getElementById('cookieSettingsModal');
  modal.style.display = 'none';
}

// Salvar configurações de cookies
function saveCookieSettings() {
  const preferenceCookies = document.getElementById('preferenceCookies').checked;
  const statisticsCookies = document.getElementById('statisticsCookies').checked;
  const marketingCookies = document.getElementById('marketingCookies').checked;

  // Salvar configurações no localStorage
  const cookieSettings = {
    preference: preferenceCookies,
    statistics: statisticsCookies,
    marketing: marketingCookies,
  };

  localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));

  alert('Suas preferências de cookies foram salvas!');
  closeCookieSettingsModal();
}

// Verificar configurações de cookies ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedSettings = JSON.parse(localStorage.getItem('cookieSettings'));
  if (savedSettings) {
    document.getElementById('preferenceCookies').checked = savedSettings.preference;
    document.getElementById('statisticsCookies').checked = savedSettings.statistics;
    document.getElementById('marketingCookies').checked = savedSettings.marketing;
  }
});

// Ajustar posição caso a janela de definições de cookies seja aberta
function adjustCookiePosition() {
  const cookieConsent = document.getElementById('cookieConsent');
  cookieConsent.style.bottom = '200px'; // Altere para a altura adequada
}

document.getElementById('openCookieSettings').addEventListener('click', () => {
  adjustCookiePosition();
});

// NewAPI
document.addEventListener('DOMContentLoaded', () => {
  const apiKey = '6715350b1f6d4a19b1fe2549acb6bf61'; // Substitua pela sua chave da News API
  const url = `https://newsapi.org/v2/everything?q=cybersecurity&language=pt&sortBy=publishedAt&apiKey=${apiKey}`;
  const listaNoticias = document.getElementById('lista-noticias');
  const noticiasCarrossel = document.getElementById('noticias-recentes');
  const btnFechar = document.getElementById('fechar-noticias');

  // Buscar notícias da API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.articles && data.articles.length > 0) {
        const articles = data.articles.slice(0, 10); // Limitar a 10 notícias
        articles.forEach((article) => {
          const li = document.createElement('li');
          li.innerHTML = `
            <a href="${article.url}" target="_blank">${article.title}</a>
          `;
          listaNoticias.appendChild(li);
        });

        // Exibir o carrossel de notícias
        noticiasCarrossel.classList.remove('hidden');
      }
    })
    .catch((error) => console.error('Erro ao buscar notícias:', error));

  // Fechar o carrossel
  btnFechar.addEventListener('click', () => {
    noticiasCarrossel.classList.add('hidden');
  });
});

