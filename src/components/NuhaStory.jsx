import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import StoryCard from './StoryCard';
import Gallery from './Gallery';
import LockedGallery from './LockedGallery';

const NuhaStory = ({ onLogout }) => {
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
      <ThreeBackground type="hearts" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glassmorphism border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold gradient-text">
            Nuha's Story 💖
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
          className="fixed bottom-8 right-8 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full nuha-gradient flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform"
        >
          ↑
        </button>
      )}

      <div className="pt-20 relative z-10">
        {/* Hero Section - Ultra Modern Landing */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            {/* Animated Avatar with Glow */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="mb-12"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full nuha-gradient p-2 mb-8 animate-float shadow-2xl shadow-pink-500/50">
                <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-8xl backdrop-blur-xl">
                  💖
                </div>
              </div>
            </motion.div>

            {/* Magnificent Animated Name - NUHA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-12"
            >
              <h1 className="sister-name-nuha mb-6" style={{ lineHeight: '1.2' }}>
                NUHA
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-2xl md:text-4xl text-pink-200 font-display italic"
              >
                My Sister, My Baba, My Everything
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
                You are not just my sister...
              </p>
              <p className="text-2xl md:text-4xl lg:text-5xl leading-relaxed text-white font-semibold gradient-text">
                You are the light that guides me through darkness
              </p>
              <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-gray-200 max-w-4xl mx-auto">
                Every smile of yours heals my wounds. Every tear of yours breaks my heart. You taught me what unconditional love means without any blood relation.
              </p>
              <p className="text-xl md:text-3xl leading-relaxed text-pink-300 max-w-4xl mx-auto font-display italic">
                This is our story, written with emotions deeper than oceans, stronger than mountains...
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-16 animate-bounce"
            >
              <p className="text-gray-400 text-lg">↓ Scroll to journey through our precious memories ↓</p>
            </motion.div>
          </div>
        </div>

        {/* Memory Section 1: The Day I Met Her */}
        <StoryCard
          title="THE DAY I MET HER"
          content={`It was evening, I got a call from my friend, then I went to the study area. There were my friends sitting, they bunked QGIS class. I remember it was around 4:50 PM.

One of my friends faced an error in a frontend application, then I fixed that error. My other friend was sitting on the opposite side. He tried to fix one error on someone's laptop, then he asked for help.

I said, "Whose laptop is this?" Then he said, "This is Nuha's one." That was the first time I heard your name.

When I fixed it, you came and sat next to me. I never looked at you. I just focused on your laptop and taught my friend what this error was and how to fix it. But I never looked at your face.

I usually said bye and came home.`}
        />

        {/* Memory Section 2: After a Week I Met Her */}
        <StoryCard
          title="AFTER A WEEK I MET HER"
          content={`That was our final project session. I came to Kamil's home and I had doubts in QGIS. It was around 9:30 AM when I came to ICBT. You were sitting alone at the study area. Kamil introduced me as his friend. I asked some doubts, you clarified them, and we went to the library together.`}
        />

        {/* Memory Section 3: Days Gone */}
        <StoryCard
          title="DAYS GONE"
          content={`We learned together. You started to love Kamil. We backbit, everything was so good. I taught you like a brother—coding-related things—that's how we connected.

Then they added me to their WhatsApp group. I usually never connected with girls. But you are very different, very kind, soft-hearted. You always take emotional things and cry.`}
        />

        {/* Memory Section 4: First Time I Make Her Cry */}
        <StoryCard
          title="FIRST TIME I MAKE HER CRY"
          isEmotional={true}
          content={`It was morning time, everyone came to the library as usual. I usually started kidding with you. I said, "Today we're going to meet Nuha's mom." Then you started crying.

On that same day evening, on the 2nd floor, we were coding on a laptop. You cried again.

I said it was a joke, but you said, "You don't understand, Shinan. My mama is too strict. Don't kid like that." At that moment, you were too serious.

I didn't say anything. I felt too guilty inside. My heartbeat raised up too much.

Kamil brought you and made you calm down. Then you called me, wanting to talk with me. At first, I said, "I won't talk with you."

Then you grabbed me and talked with me. That was my first time touching a girl's hand other than my sister and my baba. My body was getting shivery inside. I felt too uncomfortable.

You said, "I look at you like my father. I always cry easily. You are too personal to me."

At that time, I felt something inside. It's not love, but I felt like a bond.

You said, "After my ex and Kamil, I'm hugging you. I'll never forget those words at that time." You said your father was not with you—he went abroad. I felt you were so caring.

You said you cry for different reasons, not because of me. You told me about your past, about your ex.

I realized at that moment—you're caring. This is not love.`}
        />

        {/* Memory Section 5: My First Gift to My Sister */}
        <StoryCard
          title="MY FIRST GIFT TO MY SISTER"
          content={`We started messaging and talking with each other. I loved when you worked at night—I'd join in AnyDesk and be with you. I did as much as I could to give support.

One day, I was planning to bring clothes for you. I didn't know your dress size, but I felt I wanted to buy something for you. I felt like I needed to make my sister surprised.

I asked help from Kamila and Dawan. When going to the cafeteria, I started usual talk and asked your dress size. You said 3XL and 4XL. I asked my other sister, she said XL.

When we got back to the library, I called Kamil and asked for help. I said I needed to buy something for her, so I needed Dawan's bike. He came with me. We went to Sirasa Garments and came back.

You were at the top floor in ICBT. I went there and gifted it to you. That was a great memory in my life.

After a week, you wore it and showed me. After the next week, you both wore it and came back to ICBT to show me. It was a very happy day in my life.`}
        />

        {/* Memory Section 6: Day She Was With Me When I'm in Pain */}
        <StoryCard
          title="DAY SHE WAS WITH ME WHEN I'M IN PAIN"
          isEmotional={true}
          content={`I was always talking with her. You came into my personal things. I told you about baba, about sister problems. Things I never shared with anyone else.

You didn't just listen - you understood. You felt my pain as your own.

You made me calm with your words, your presence, your care. You said you're also like that. You said, "If anything happens, I'm with you. Whatever you feel, tell me. I'm a good listener."

But you were more than a listener. You became my strength when I was weak, my hope when I was lost.

At that moment, I realized - blood doesn't make family. Love does. Care does. Being there for each other does.

I needed you as my sister. I accepted you at that moment with my whole heart.

You saved me from my darkness, Nuha. You gave me a reason to smile again.

I love you more than words can express, my baba.`}
        />

        {/* Memory Section 7: When I Come to Campus */}
        <StoryCard
          title="WHEN I COME TO CAMPUS"
          content={`I love to see you laughing, your beautiful smile, your innocent attitudes. Your happiness became my happiness. Sometimes, the only reason I come to ICBT is just to see that smile, to hear that laugh.

Your presence lights up my world. Just knowing you're there makes everything better.

When you cry, my world stops. I can't bear seeing tears in your eyes. I don't like you crying because when you cry, I feel like crying too. My heart breaks into pieces.

You're totally inside me, deeper than anyone could imagine. But I'm not in love with you - this is something more pure, more sacred. I care for you with every fiber of my being. You're my sister—no blood relationship, but a bond stronger than blood.

Every time I see tears in your eyes, I feel helpless. I want to hug you tight and make you calm down. I want to take away all your pain, all your worries, and carry them myself.

If I could, I would take away every single pain you've ever felt and bear it myself. That's how much you mean to me, thaggachiii.`}
        />

        {/* Memory Section 8: She Tells Her Father's Problem */}
        <StoryCard
          title="SHE TELLS HER FATHER'S PROBLEM"
          isEmotional={true}
          content={`It was around 12 PM. We went to the cafeteria. While in conversation, you said you don't have any backup plan for your family. You told me your father's situation.

At that time, I came to know you bit by bit. I felt like I needed to be with you in any situation that happened. You told me about your medical expenses.

At that time, I totally cried inside. I couldn't talk even a word because I felt like I wanted to do something.

On that night, I was very sad. I sent you a message: "I will be with you in any situation."

Still, I remember.

You are a WARRIOR. You fight for your health.`}
        />

        {/* Memory Section 9: She Cried Second Time */}
        <StoryCard
          title="SHE CRIED SECOND TIME"
          content={`In the Tharunya-Dawan issue, you cried on the 3rd floor. I can't forget that. At that time, I felt too nervous.

I really hate Dawan. Still, it's hurting.`}
        />

        {/* Memory Section 10: Final Viva */}
        <StoryCard
          title="FINAL VIVA"
          content={`That day, I went to Nuha's home. It was the first time I saw your mom. Your home is a very cute home. I love that. You're like a homely girl.

I talked with your mom. We ate together. I love those memories.

When I see your home, I remember your father. He's your superhero. He works to keep your family happy. He works overseas.`}
        />

        {/* Memory Section 11: I Fight for Her */}
        <StoryCard
          title="I FIGHT FOR HER"
          content={`There was a problem. I talked for you to Kamil. The issue grew big. I didn't want to talk.

But it is a memory in my life.`}
        />

        {/* Memory Section 12: Video Calls Memory */}
        <StoryCard
          title="VIDEO CALLS MEMORY"
          content={`I remember we always take video calls and talk. I love you when you never have makeup—that homely girl. I love that face.`}
        />

        {/* Memory Section 13: Recently She Went Outside */}
        <StoryCard
          title="RECENTLY SHE WENT OUTSIDE"
          content={`You called me and looked at my face. I love those memories.

You were with your sister Maryam.`}
        />

        {/* Memory Section 14: We Went Outside for Ramen Noodles */}
        <StoryCard
          title="WE WENT OUTSIDE FOR RAMEN NOODLES"
          isEmotional={true}
          content={`We ate ramen noodles together. It was such a beautiful time when we talked about our precious memories in front of ICBT. Your smile, your laugh - everything was perfect that day.

But then... when you went back home, your hand got pressed. You had to go to the hospital.

I called you, but I couldn't reach you. My hands were shaking. My heart was pounding. Fear consumed me.

That day, I broke down completely. I cried alone at the bus stand, tears streaming down my face. People stared, but I didn't care. I made dua for you with trembling lips and a breaking heart.

I felt so helpless, so powerless. All I could do was wait - wait for your voice, wait for your call, pray for your safety.

Time stopped. Every second felt like an eternity. I kept dialing your number again and again, hoping you'd pick up.

I prayed to Allah with everything I had - it will never happen again in your life. You've been through enough pain already. You don't deserve this.

At that moment, I realized - I can't live without knowing you're safe. I need to be with you, to protect you, to keep you from harm.

I love you more than everyone in this world, NUHAAAAAA. This is not just words - this is the truth from the deepest part of my heart.

I can't bear when you're sad, crying, or having health issues. Every pain of yours cuts through my soul like a knife. I can't take that pain.

I will always be with you, protecting you, caring for you, loving you. This is my promise, my commitment, my vow to you.

You are my life, thaggachiii. Always and forever.`}
        />

        {/* Memory Section 15: Day I Break Her Heart - MOST EMOTIONAL */}
        <div className="story-card animate-in">
          <div className="broken-heart-section py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-red-400 mb-6 text-shadow-lg">
                  THIS PART I HATE IN MY LIFE
                </h2>
                <h3 className="text-2xl md:text-4xl font-semibold text-red-300 mb-8 text-shadow">
                  I STILL FEEL IT SHOULD NOT HAVE HAPPENED ON THAT DAY
                </h3>
              </div>

              <div className="glassmorphism bg-black/40 border-red-900/30 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-red-900/20">
                <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-8 text-center">
                  DAY I BROKE HER HEART
                </h2>

                <div className="text-lg md:text-2xl leading-relaxed text-gray-200 space-y-6 whitespace-pre-line">
{`It was nighttime. I'll never forget that night.

Before that night, I started to ignore you. You asked me a lot of times, but I said nothing.

You said you understand me. You said everything will get fine. You said you'll make dua for that. But I never minded.

That night, I said my problem.

I said one useless word. I hate that still.

Only Tharunya was with me at that time. You broke too much. It's all because of me. Later I understood, but it was too late. I can't fix that.

After that, I asked sorry. You said you forgot that incident.

But I know you keep that inside you. I feel it—because once you break that glass, even if you fix it, the crack remains visible. Now I feel like that.

But I love you still. I need you as like as earlier.

I need your smile. You always say to me, "Love you, nana." I miss those moments.

You always ask, "What are you doing?" about my personal things. But I feel like I miss everything.

You are my princess, but I need my baba back. I need you, thaggachiii.

It's the hardest day in my lifetime when I feel I cry because of my madness I did on that day.

She will understand me one day.`}
                </div>

                <div className="mt-12 text-center">
                  <div className="text-6xl mb-4 animate-heartbeat">💔</div>
                  <p className="text-xl md:text-2xl text-red-300 font-semibold">
                    I'm sorry, my baba...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Emotional Card: Don't Say I'm Not Caring */}
        <div className="story-card animate-in">
          <div className="py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="glassmorphism bg-gradient-to-br from-pink-900/30 to-purple-900/30 border-pink-500/30 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-300 mb-8 text-center">
                  DON'T SAY I'M NOT CARING
                </h2>

                <div className="text-lg md:text-xl leading-relaxed text-gray-200 space-y-6 whitespace-pre-line">
{`Please... don't ever say I don't care.

After that fight, I cried the entire night. Tears soaking my pillow, heart breaking with every breath. Yes, it was my fault. I know. I own it. But let me tell you something that burns in my soul every single day:

You are not just in my life. You ARE my life. You sit at the highest throne in my heart, my princess. Nothing - NOTHING - comes before you.

If anything happened to you, if I lost you, if pain touched you - I wouldn't survive it. That's not exaggeration. That's the raw, naked truth.

---

You want to know why I keep asking "Are you eating or not?"

It's not nagging. It's not control. It's because...

Every time I sit down to eat, your face flashes before my eyes. I see you - working hard, pushing yourself, forgetting to eat. And suddenly, the food in my mouth tastes like ash.

I can't swallow. I can't enjoy a single bite knowing you haven't eaten.

So I wait. I hope. I pray that you've eaten. Because only then can I eat in peace.

Don't tell me "Ask Tharunya if she ate, then I'll eat." No, baba. That's not how this works.

I need BOTH of you. You're not replaceable. You're irreplaceable.

You might be "just a person" to yourself, but to me? You're my emotional anchor. My safe place. My reason to care so deeply that it hurts.

That's why I get possessive. Not to control you, but because losing you would destroy me.

I love asking about you. I NEED to ask about you.

Please... understand what you mean to me.

---

Some nights, I can't sleep. I just think about you. I talk to Allah about you.

Do you remember that night? You were crying when I was at Kamil's home. My heart shattered hearing your voice break.

All I wanted was to run to you. To hold you. To tell you everything will be okay.

You told me your life felt like hell. You shared the wounds from your childhood, the scars from love, the pain you've carried silently for so long.

In that moment, I died inside.

It was the hardest, most painful moment of my entire life. My strong sister, my warrior, breaking down... and I couldn't reach you.

I will NEVER forget that night. Never.

---

And here's my promise to you:

Even if you walk away from me tomorrow. Even if you decide you don't need me anymore. Even if you forget my name.

I will STILL be there for you.

In sickness, in struggle, in sadness, in success - I won't let you face anything alone.

Your health, your happiness, your career, your dreams - I will fight for all of it as if it were my own.

Because you have a brother whose love has no conditions, no limits, no end.

---

By the way... remember that cream you suggested from Yara production? Ahahaha! It's actually working! My face is getting brighter!

See? Even in small things, you make my life better.

You, my sister, in my tiny world, you hold the biggest space. You're the sun everything revolves around.

I wish I could see you right now. I want to see that hand that got hurt last time we met. I want to hold it gently and promise it will never hurt again.

---

Every night, I raise my hands and pray:

"Ya Allah, guide my precious sister Nuha on Your straight path.

Heal what's broken deep inside her soul. Mend the wounds no one else can see.

Give her the health and strength she deserves - because she's fought battles no one knows about.

You know her suffering. You've counted every tear. You know what's hidden in her heart - every hope, every fear, every dream.

Ya Allah, place someone in her life who will cherish her like nobody ever has.

A partner who will keep her smiling until her last breath on this earth and reunite with her in Jannah's eternal gardens.

Make her the best daughter to her superhero father - the man who sacrificed everything for his family.

And Ya Allah, bless her with a future so bright, so beautiful, that it erases every shadow of her painful past.

Ameen."

---

Listen to me, Nuha:

You deserve the ENTIRE world. The moon. The stars. Everything beautiful.

Not because of what you've survived - though that makes you incredible.

But because of WHO YOU ARE.

You're a fighter with the softest heart I've ever known.
You're a giver who keeps giving despite your own empty cup.
You're a believer who kept faith when life gave you every reason to quit.

You. Are. Extraordinary.

---

I love you, my sister.

Not by blood - but by CHOICE.
Not by chance - but by Allah's PERFECT plan.

You were meant to be in my life. And I was meant to love you, protect you, care for you.

This is not a phase. This is not temporary.

This is forever, thaggachiii.

Forever. 💖`}
                </div>

                <div className="mt-12 text-center space-y-4">
                  <div className="text-6xl mb-4 animate-float">
                    🤲💖
                  </div>
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    Forever your brother, by Allah's plan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section: Memory 1 */}
        <Gallery
          folderName="memory1"
          title="Our Beautiful Memories 📸"
        />

        {/* Password-Protected Gallery: Memory 2 */}
        <LockedGallery
          folderName="memory2-lock"
          title="Special Protected Memories 🔒"
          password="nuhasecret123"
        />

        {/* Gallery Section: Memory 3 */}
        <Gallery
          folderName="memory3"
          title="More Precious Moments 💝"
        />

        {/* Final Memory Section */}
        <div className="emotional-section py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glassmorphism bg-white/5 rounded-2xl p-8 md:p-12 lg:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 gradient-text">
                LAST MEMORY
              </h2>

              <div className="text-lg md:text-2xl leading-relaxed text-gray-100 space-y-6 whitespace-pre-line text-center">
{`Before I go abroad, every moment with you becomes more precious. I try to meet you as much as I can, to see your smile, to hear your laugh, to make you happy. Because I know distance will keep us apart physically, but never emotionally.

Every single moment I spend with you is not just time - it's a golden treasure I'll carry in my heart forever.

Love you so much, Nuha. More than you'll ever know.

I'm always there for you - across oceans, across continents, across any distance this world can create.

---

I am the luckiest person in this world to have you as my sister in my life. Not everyone gets a blessing like you.

I love you more than everyone in my life. These are not just words written on a screen - they are feelings carved deep in my soul.

I'll never forget these moments, thaggachiiiii. They are the best parts of my life.

---

I really love you. Wherever I go, whatever I do, I'm always talking with you, thinking about you, my sister.

Distance may separate us, but it will never break our bond.

I'll try to go after graduation, Insha Allah. But before that, I'll try my best to help you get work, to make your dreams come true. Because your happiness is my happiness.

I love you. I wish I had better words to express these feelings that overflow from my heart.

---

Every time you talk with me, I feel blessed. I feel like I have the best person in my life that others can only dream of having.

Whatever you do, wherever you go, always remember me. Because I will never forget you.

Even if I have tons of work, even if the world is falling apart, I will always ask you what you're doing. Because you matter more than anything else.

I love to see you grow, succeed, and get the position you deserve in life. Your success will be my success.

---

If I ever hurt you in any situation, please forgive me. Every mistake I made haunts me. But know this - I never meant to cause you pain.

I love you, my sister. This love is pure, eternal, and unconditional.

---

Memories never die. They live in our hearts forever.

When you miss me, when you feel alone, just go through this. This is how I see you in my world.

You are not just my sister. You are my strength, my hope, my reason to smile.

You, your parents, your father - you all hold a special place in my heart.

And you, Nuha, you are my hidden diamond. The most precious treasure of my life.

Never forget - you are loved beyond measure. 💎`}
              </div>

              <div className="mt-12 space-y-6">
                <div className="text-center">
                  <p className="arabic-text text-pink-300 mb-4">إن شاء الله</p>
                  <p className="text-gray-400">(Insha Allah)</p>
                </div>

                <div className="text-6xl text-center animate-sparkle">
                  💎✨💖
                </div>

                <p className="text-2xl md:text-3xl font-bold text-center gradient-text">
                  Until we meet again, my sister...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 text-center text-gray-400">
          <p className="text-lg mb-4">Made with 💖 for Nuha</p>
          <p className="text-sm">You are my hidden diamond 💎</p>
        </footer>
      </div>
    </div>
  );
};

export default NuhaStory;
