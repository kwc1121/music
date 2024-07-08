
const artist = [
    "이문세", "IU", "태연 (TAEYEON)", "백현 (BAEKHYUN)", "청하 (CHUNG HA)", 
    "헤이즈 (Heize)", "이적 (LEE JUCK)", "박효신 (Park Hyo Shin)", "케이윌 (K.Will)", 
    "윤하 (Younha)", "이승철 (Lee Seung Chul)", "벤 (Ben)", "백지영 (Baek Ji Young)", 
    "김범수 (Kim Bum Soo)", "김동률 (Kim Dong Ryul)", "성시경 (Sung Si Kyung)", 
    "선미 (Sunmi)", "현아 (HyunA)", "싸이 (PSY)", "유아 (YooA)", 
    "Adele", "Taylor Swift", "Beyoncé", "Justin Bieber", "Ariana Grande", 
    "Bruno Mars", "Ed Sheeran", "Billie Eilish", "Lady Gaga", "Rihanna", 
    "Shawn Mendes", "Selena Gomez", "The Weeknd", "Dua Lipa", "Harry Styles", 
    "Sam Smith", "Katy Perry", "John Legend", "Halsey", "Camila Cabello", 
    "Eminem", "Drake", "Kanye West", "Kendrick Lamar", "Jay-Z", 
    "Nicki Minaj", "Travis Scott", "Post Malone", "Cardi B", "J. Cole", 
    "Lil Wayne", "Future", "ASAP Rocky", "Tyler, The Creator", "21 Savage", 
    "Megan Thee Stallion", "Lil Baby", "DaBaby", "Logic", "Chance The Rapper", 
    "타이거 JK (Tiger JK)", "윤미래 (Yoon Mi Rae)", "비와이 (BewhY)", "사이먼 도미닉 (Simon Dominic)", 
    "지코 (ZICO)", "박재범 (Jay Park)", "그레이 (GRAY)", "창모 (CHANGMO)", 
    "넉살 (Nucksal)", "빈지노 (Beenzino)", "도끼 (Dok2)", "스윙스 (Swings)", 
    "팔로알토 (Paloalto)", "기리보이 (Giriboy)", "딘 (DEAN)", "로꼬 (Loco)", 
    "제시 (Jessi)", "블락비 지코 (ZICO)", "릴보이 (Lil Boi)", "우원재 (Woo Won Jae)","My Chemical Romance"
];
  
  
  const randomArtist = artist[Math.floor(Math.random() * artist.length)];
  document.getElementById('artist-display').textContent = randomArtist;
  
  
  function navigateTo(page) {
      window.location.href = page;
  }