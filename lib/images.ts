/**
 * Curated cinematic photography (Unsplash).
 * Editorial, warm, premium — pastoral conversation, marketplace leadership,
 * boardrooms, brotherhood, city, legacy. No cheesy church stock.
 *
 * These are placeholders for the production photo library. Swap the URLs here
 * (or wire to a CMS) and the entire site updates.
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  // Hero — quiet, cinematic city / leadership at dawn
  hero: u("photo-1486406146926-c627a92ad1ab", 2400),

  // Two worlds — Sunday / Monday
  worship: u("photo-1438232992991-995b7058bbb3"),
  boardroom: u("photo-1497366216548-37526070297c"),

  // Andrew's story — pastoral conversation
  conversation: u("photo-1521737711867-e3b97375f902"),
  coffee: u("photo-1504384308090-c894fdcc538d"),

  // Brotherhood / collective
  brotherhood: u("photo-1543269865-cbf427effbad"),
  handshake: u("photo-1559136555-9303baea8ebd"),

  // Five areas of formation
  excellence: u("photo-1486406146926-c627a92ad1ab"),
  leadership: u("photo-1542744173-8e7e53415bb0"),
  character: u("photo-1499209974431-9dddcece7f88"),
  spiritual: u("photo-1507692049790-de58290a4334"),
  generosity: u("photo-1593113598332-cd288d649433"),

  // Designed for pastors
  pastor: u("photo-1507003211169-0a1dd7228f2d"),
  shepherd: u("photo-1438761681033-6461ffad8d80"),

  // Members receive / summit
  summit: u("photo-1511795409834-ef04bbd61622"),
  roundtable: u("photo-1556761175-5973dc0f32e7"),
  app: u("photo-1512941937669-90a1b58e7e9c"),

  // City / legacy / kingdom
  city: u("photo-1444723121867-7a241cacace9", 2400),
  skyline: u("photo-1480714378408-67cf0d13bc1b", 2400),
  legacy: u("photo-1450101499163-c8848c66ca85"),

  // Andrew profile
  andrew: u("photo-1560250097-0b93528c311a"),

  // Closing
  closing: u("photo-1519501025264-65ba15a82390", 2400),

  // Mobile app
  phone: u("photo-1512941937669-90a1b58e7e9c"),

  // Resources
  articles: u("photo-1457369804613-52c61a468e7d"),
  book: u("photo-1544716278-ca5e3f4abd8c"),
  research: u("photo-1551288049-bebda4e38f71"),
};

export type ImageKey = keyof typeof IMAGES;
