import { useState, useEffect } from 'react';
import Header from './components/Header'; // Header bileşenini import ettik
import './App.css'; // Tüm genel CSS dosyanız

function App() {
  // Animasyon için mevcut Intersection Observer mantığını burada kullanabiliriz
  // Ancak şimdilik sadece Header'ı render edelim, sonra diğer bölümleri ekleriz.

  useEffect(() => {
    // Mevcut JS'deki Intersection Observer kodunu buraya taşıyabiliriz.
    // Şimdilik sadece örnek bir başlangıç yapısı sunuyorum.
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Gözlemlenecek elementler (şu anlık sadece Header'a odaklanalım)
    // İleride diğer section'ları da ekleyeceğiz.
    // document.querySelectorAll(".section-title, .animated-content, .animated-content-text, .banner-right .join-btn, .timer-box").forEach((el) => {
    //   observer.observe(el);
    // });

    // Sadece örnek olarak, ileride tüm HTML elementlerini React component'lerine dönüştüreceğiz.
    // Şu an için sadece Header'ın düzgün çalıştığından emin olalım.
    return () => {
      // Cleanup function if needed
      // observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      {/* Diğer section'lar buraya gelecek, şimdilik boş bırakıyoruz */}
      {/* Örneğin:
      <section className="countdown">...</section>
      <section className="banner">...</section>
      ...
      <footer>...</footer>
      */}
    </>
  );
}

export default App;