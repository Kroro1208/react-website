// import images
import website2 from './assets/img/website2.png';
import social from './assets/img/sns2.png';
import matching from './assets/img/matching.png';

export const navData = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Business',
    href: '/business',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const works = [
  {
    image: website2,
    name: 'ECサイト',
    description: "多機能かつユーザーフレンドリーなECサイトの開発を手掛け、売上の向上と顧客満足度の向上に貢献。カスタマイズ可能な商品ページと、安全な決済システムを統合。"

  },
  {
    image: matching,
    name: 'マッチングアプリ',
    description:
      "興味や活動を共有するユーザーを繋げるマッチングアプリを開発。独自のアルゴリズムにより、高いマッチング精度とユーザーエンゲージメントを実現。",
  },
  {
    image: social,
    name: 'SNSコンサル',
    description:
      "複数のSNSプラットフォームにわたる統合マーケティング戦略の立案と実行を支援。クライアントのオンラインプレゼンスとユーザーとの関わりを深める戦略を提供。",
  },
];
