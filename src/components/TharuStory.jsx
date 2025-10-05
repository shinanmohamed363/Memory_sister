import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import StoryCard from './StoryCard';
import Gallery from './Gallery';
import LockedGallery from './LockedGallery';

const TharuStory = ({ onLogout }) => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to leave?')) {
      onLogout();
      navigate('/');
    }
  };

  return (
    <div className="relative min-h-screen">
      <ThreeBackground type="stars" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glassmorphism border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold gradient-text">
            Tharu's Story 👑
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
          >
            ← Back to Login
          </button>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full tharu-gradient flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform"
        >
          ↑
        </button>
      )}

      <div className="pt-20 relative z-10">
        {/* Hero Section - Ultra Modern Landing */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            {/* Animated Crown and Avatar */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="mb-12 relative"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl md:text-9xl mb-4"
              >
                👑
              </motion.div>
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full tharu-gradient p-2 animate-float shadow-2xl shadow-purple-500/50">
                <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-8xl backdrop-blur-xl">
                  ✨
                </div>
              </div>
            </motion.div>

            {/* Magnificent Animated Name - THARUNYA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-12"
            >
              <h1 className="sister-name-tharu mb-6" style={{ lineHeight: '1.2' }}>
                Tharunya
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-2xl md:text-4xl text-purple-200 font-display italic"
              >
                My Little Princess, My Pride, My Joy
              </motion.p>
            </motion.div>

            {/* Heart-Touching Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-3xl lg:text-4xl leading-relaxed text-gray-100 font-light">
                You are not just a friend...
              </p>
              <p className="text-2xl md:text-4xl lg:text-5xl leading-relaxed text-white font-semibold gradient-text">
                You are the princess who taught me to care beyond boundaries
              </p>
              <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-gray-200 max-w-4xl mx-auto">
                Your innocence melts my heart. Your smile lights up my darkest days. You showed me that family is not just blood - it's the love we choose to give.
              </p>
              <p className="text-xl md:text-3xl leading-relaxed text-purple-300 max-w-4xl mx-auto font-display italic">
                This is our journey, painted with laughter, tears, and unconditional love...
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-16 animate-bounce"
            >
              <p className="text-gray-400 text-lg">↓ Scroll to discover our beautiful memories ↓</p>
            </motion.div>
          </div>
        </div>

        {/* Memory Section 1: Landing Story - First Meeting */}
        <StoryCard
          title="OUR FIRST MEETING"
          content={`It was our first class—the induction ceremony. I met you in the study area. You talked with me, and then we attended that ceremony together.

I talked with you, and it was a good day for me. I met some other friends as well.

In our first class, I came in the morning and sat on the first bench. You and Kamil came last. You didn't have chairs, so you put chairs in the middle area and sat in the class.

For the first time, we talked about use case diagrams. At that time, I felt you are a good girl. You make people happy. You are very open-minded.

But everything was new to me, but I liked it here. You talked with me like we met before.

At that time, I never talked with any girls since my school days. You broke that wall without knowing it.`}
        />

        {/* Memory Section 2: She Says Book Place for Her in Class */}
        <StoryCard
          title="BOOK A PLACE FOR ME"
          content={`When I talked with you, you always said, "Keep a place for me in class."

When days went by, you became like a cute sister to me—always coming behind me like a cute cat. I love that.`}
        />

        {/* Memory Section 3: She Always Asks Doubts */}
        <StoryCard
          title="SHE ALWAYS ASKS DOUBTS"
          content={`You always ask doubts. Maybe you think of me as a genius, hahaha. I don't know, but you always ask doubts.

Looking at you, you have something inside—like you want to learn something, to be fluent in these areas.`}
        />

        {/* Memory Section 4: Bus Conversation */}
        <StoryCard
          title="BUS CONVERSATION"
          content={`You talked about some personal things on the bus. Sometimes you cried.

Our first conversation was about what I did, what I'm doing. You started to ask questions until you got off that bus. I gave you motivation.

I told you how to learn, how to improve yourself.`}
        />

        {/* Memory Section 5: She Talks About Her Family Matter First Time in Bus */}
        <StoryCard
          title="SHE TALKS ABOUT HER FAMILY MATTER FIRST TIME IN BUS"
          isEmotional={true}
          content={`It was evening time, around 4:30 PM. We took a bus as usual. I asked you about your family, and you said one sister and two brothers. I never asked about your sister on that day, but you told me about your two brothers.

One has a problem—he gets angry. One always looks at your personal life—he never cares about the family.

When you said this, you cried. I saw you cry—your left-side eye. I saw the first teardrop at that time.

I was not much closer to you, but I felt like it should never happen to anyone. I prayed at that time.

You are very—how to say that—you take care of your family. Very soft heart.`}
        />

        {/* Memory Section 6: She Bought Two T-Shirts for Her in HND */}
        <StoryCard
          title="SHE BOUGHT TWO T-SHIRTS FOR HER IN HND"
          content={`That happened during our class time. Dawan said that. At that time, I got to know your heart—how lovely you are, like a hidden diamond.

You help them. You're always aware of others' situations. Before you give a word, you're aware of how it will affect them.

I love that character.`}
        />

        {/* Memory Section 7: She Buys Food for Us */}
        <StoryCard
          title="SHE BUYS FOOD FOR US"
          content={`When we went to the cafeteria, you always bought food for us. You ask, "What are you gonna eat?"

I learned a lot of things from you. I love that.`}
        />

        {/* Memory Section 8: She Shares Her Marriage Things to Me */}
        <StoryCard
          title="SHE SHARES HER MARRIAGE THINGS TO ME"
          content={`One day, we went to the cafeteria. I asked you about your love. You told me your love story—how you met Mauran and how you love each other.

I never fell in love, but I love your story. You shared your feelings.

You said he is understanding. Sometimes he gets angry, but he is very pure. He never looks at any woman.

That day evening, we went again after finishing our class. At that time, you said Mauran wants to start a business and told me about his family situation.

I feel like Tharu is very patient, full of understanding.`}
        />

        {/* Memory Section 9: She Shares Her Father's Leg Problem - HIGHLY EMOTIONAL */}
        <div className="story-card animate-in">
          <div className="broken-heart-section py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="glassmorphism bg-black/40 border-purple-900/30 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-purple-900/20">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-8 text-center text-shadow-lg">
                  SHE SHARES HER FATHER'S LEG PROBLEM
                </h2>

                <div className="text-lg md:text-2xl leading-relaxed text-gray-200 space-y-6 whitespace-pre-line">
{`It was evening period. Tharunya, Kamil, and myself went to Bun Club. We ordered hotdogs and sat together. The atmosphere was casual, filled with our usual laughter and conversations.

Then, while talking, Tharu opened up about what she loves, why she needs to earn money, what drives her. And she came to that point - her father's story.

At that time, our relationship was too close—closer than anyone else in my life. She trusted me with her deepest pain.

As she started to tell her father's story, I looked only at her eyes. I saw the pain, the struggle, the weight she's been carrying all alone.

In that moment, I felt like someone took a sharp knife and cut my heart into pieces. The pain was unbearable. It was very, very painful to me.

My throat tightened. My chest felt heavy. I couldn't even talk with her. Words failed me completely.

All I could think was - I want to do something. I NEED to do something. I can't just sit here while my little sister carries this burden.

I really cried inside. Tears I couldn't show. Pain I had to hide. But inside, I was breaking.

Her strength amazed me. Her father's struggle broke me. Her family's pain became my pain.

At that moment, I made a silent promise - I will be there for her, always. I will help carry this burden with her.

I'll never forget that evening. I'll never forget the look in her eyes. I'll never forget how helpless I felt.

But I also promised myself - I will never let her face this alone. She has me now. She has her brother.

Your father is a warrior, Tharu. And you are his brave daughter. I'm proud of you both.`}
                </div>

                <div className="mt-12 text-center">
                  <div className="text-6xl mb-4 animate-heartbeat">💔</div>
                  <p className="text-xl md:text-2xl text-purple-300 font-semibold">
                    I'll never forget...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Section 10: My First Gift to My Sister */}
        <StoryCard
          title="MY FIRST GIFT TO MY SISTER"
          content={`One day, I was planning to bring clothes for you. I didn't know your dress size, but I felt I wanted to buy something for you.

I felt like I needed to make my sister special and surprised.

I asked help from Kamila and Dawan. When going to the cafeteria, I started usual talk and asked about your dress size.

First time, you didn't tell me. I asked again, then you told me your size: Large, XL, or Large.

I left from ICBT saying I had to buy a laptop. I lied to them and went to Sirasa Garments and bought some clothes.

Then we went back. You were sitting at the top floor in ICBT. I gifted it to you. That is the best part of my life. I saw your happiness.

Next week, you wore that dress and came to campus.`}
        />

        {/* Memory Section 11: Day She Cried and I Got to Know About Yathu */}
        <StoryCard
          title="DAY SHE CRIED AND I GOT TO KNOW ABOUT YATHU"
          isEmotional={true}
          content={`It was morning time. I usually came to campus and stayed in the library. I waited for my friends.

You came to campus with trouble. You were outside the library. You took a call and talked about Yathu's issue. You were very troubled. My stress level increased beyond that limit.

You talked with your sister Yathu. You tried to make that situation normal.

Then you started to cry. I'll never forget. Still, when I close my eyes, I feel that moment.

That is the time I felt I need to be with you—whatever happens, I need to be with you.

I love you, Tharu.`}
        />

        {/* Memory Section 12: She's Caring for Me */}
        <StoryCard
          title="SHE'S CARING FOR ME"
          content={`You're always caring for me. Always. No matter what's happening in your life, no matter how much stress you're under, you always ask: "What are you doing? Are you okay? Did you eat?"

These simple questions mean the world to me. They show me I matter to someone. They show me I'm not alone.

Even when you have tons of work, even when your own problems are overwhelming, you always, ALWAYS prioritize me. You check on me. You make sure I'm fine.

This selfless love, this pure care - it's something I never experienced before.

I love that, Tharu. I never had sisters like you. Sisters who care this deeply, who love this purely, who give without expecting anything in return.

You taught me what it means to care for someone truly.

I need you to know: if you want anything, I'm there for you. ANY time, ANY place, for ANY thing. You can ask me anything, my girl. I will drop everything for you.

You're not just my little sister. You're my responsibility, my pride, my joy.

I love you most. You have a brother—always remember that. A brother who will fight the world for you. A brother who will always protect you.

Never feel alone, thaggam. I'm always here.`}
        />

        {/* Memory Section 13: She Cried Again in Dawan Issue */}
        <StoryCard
          title="SHE CRIED AGAIN IN DAWAN ISSUE"
          isEmotional={true}
          content={`It was viva day. On that day, Dawan needed money. Tharunya got to know about his problem.

But Dawan ignored her. Still, Tharu tried to give money. Then Dawan scolded her. At that time, Tharu cried.

I felt inside I wanted to kill him because of his attitude. I really don't like him.

Then she cried a lot. I brought her to the cafeteria—me, Nuha, and Tharu. I tried to make her laugh.

I need to—I want to hug her and give the best comfort to my sister. I felt like crying inside. It will never happen again.`}
        />

        {/* Memory Section 14: We Went to Eat Ramen Noodles */}
        <StoryCard
          title="WE WENT TO EAT RAMEN NOODLES"
          isEmotional={true}
          content={`That was one of the most beautiful experiences of my life. That evening, we sat together and talked about our past memories, our journey, everything we've been through together.

The laughter, the tears, the struggles, the victories - we relived it all. Every moment felt precious. Every word felt sacred.

I love that memory so much.

Then I got the honor - the blessing - to talk with Tharu's father. It was a great, great experience. He is so innocent, so pure-hearted, just like his daughter.

He looked at me with kind eyes and said, "Take care of my daughter. Be always lovable to people. Spread kindness wherever you go."

His words touched my soul. A father's trust in me - I felt the weight of that responsibility, and I embraced it with my whole heart.

I made a promise to him in my heart: I will protect her, I will care for her, I will be the brother she deserves.

At that moment, overwhelmed with emotion, I gently kissed my little sister's forehead - something I had never done before.

And with tears in my eyes, I said, "I'll always be with you, thaggam. Okay? I'm never leaving you. No matter where life takes us, you'll always have your brother."

That promise still stands. It will stand forever.

You are my little princess, Tharu. And I am your protector, your brother, your friend, always.`}
        />

        {/* Memory Section 15: Nuha Problem */}
        <StoryCard
          title="NUHA PROBLEM"
          content={`I scolded my other sister, Nuha. At that time, I felt guilty.

At that time, you took us and solved that issue.

I miss you both too much.`}
        />

        {/* Gallery Section: Tharu Pictures Memories */}
        <Gallery
          folderName="tharu_memory1"
          title="Our Beautiful Memories 📸"
          scrollingMode={true}
        />

        {/* Password-Protected Gallery: Tharu Personal Pictures */}
        <LockedGallery
          folderName="tharu_memory2-lock"
          title="Special Protected Memories 🔒👑"
          password="tharusecret123"
          isPrincess={true}
          scrollingMode={true}
        />

        {/* Gallery Section: Tharu Memory 3 */}
        <Gallery
          folderName="tharu_memory3"
          title="More Precious Moments 💝"
          scrollingMode={true}
        />

        {/* Final Memory Section */}
        <div className="emotional-section py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glassmorphism bg-white/5 rounded-2xl p-8 md:p-12 lg:p-16 border-2 border-purple-500/30">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 gradient-text">
                LAST MEMORY
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-purple-300">
                AT LATE MY FLIGHT DAY
              </h3>

              <p className="text-sm md:text-base italic text-gray-400 text-center mb-8">
                (This will happen in the future. It has not happened yet.)
              </p>

              <div className="text-lg md:text-2xl leading-relaxed text-gray-100 space-y-6 whitespace-pre-line text-center">
{`Before I go abroad, every moment with you becomes more precious. I try to meet you as much as I can, to see your smile, to hear your laugh, to make you happy. Because I know distance will keep us apart physically, but never emotionally.

Every single moment I spend with you is not just time - it's a golden treasure I'll carry in my heart forever.

I want to say to you, my Tharu, my little princess - keep these memories always with you. Close to your heart. Forever.

I really love you. More than you can imagine. Wherever I go in this world, whatever I do, I'm always talking with you, thinking about you, my sister.

Distance will never change that. Oceans cannot separate our bond.

---

I'll try to go after graduation, Insha Allah. But before that day comes, I'll do everything I can to help you get work, to secure your future, to make your dreams come true.

Because your success is my success. Your happiness is my happiness.

I love you. I wish I had better words to express these feelings that overflow from my heart. But words feel so small for emotions this big.

---

Every single time when you talk with me, I feel blessed. I feel like I have the best person in my life that others can only dream of having.

You are rare, Tharu. You are special. You are a blessing.

Whatever you do, wherever you go, always remember me. Because I will never, EVER forget you.

Even if I have tons of work, even if I'm exhausted, even if the world is falling apart - I will always ask you what you're doing. Always check on you. Always care for you.

---

I love to see you grow up, succeed, and get the position you truly deserve in life. You deserve all the happiness in this world.

Your growth will be my pride. Your achievements will be my joy.

---

If I ever hurt you in any situation, please forgive me, my sister. Every mistake haunts me. But know this - I never meant to cause you pain.

I love you with all my heart. This love is pure, eternal, unconditional.

---

Memories never die. They live forever in our hearts, in our souls.

When you miss me, when you feel alone, when you need your brother - just go through this. Read every word. Feel every emotion.

This is how I see you in my world.

You are not just my little sister. You are my pride, my joy, my reason to work hard, my reason to become better.

You, your parents, your father, your whole family - you all hold a special place in my heart.

And you, Tharunya, you are my hidden diamond. My precious treasure. My little princess.

Never forget - you are loved beyond measure. You have a brother who will always fight for you, protect you, care for you.

Until we meet again, keep smiling, keep shining, keep being the amazing person you are.

I love you, thaggam. Forever and always. 👑💎`}
              </div>

              <div className="mt-12 space-y-6">
                <div className="text-center">
                  <p className="arabic-text text-purple-300 mb-4">إن شاء الله</p>
                  <p className="text-gray-400">(Insha Allah)</p>
                </div>

                <div className="text-6xl text-center animate-sparkle">
                  👑💎✨
                </div>

                <p className="text-2xl md:text-3xl font-bold text-center gradient-text">
                  Until we meet again, my little princess...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 text-center text-gray-400">
          <p className="text-lg mb-4">Made with 💖 for Tharu</p>
          <p className="text-sm">You are my little princess 👑</p>
        </footer>
      </div>
    </div>
  );
};

export default TharuStory;
