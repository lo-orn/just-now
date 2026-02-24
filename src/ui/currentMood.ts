
const moodTitleEl = document.getElementById("moodTitle") as HTMLHeadingElement
const moodDescription = document.getElementById("moodDescription") as HTMLParagraphElement
const moodImgEl = document.getElementById("moodImg") as HTMLImageElement
const photographerEl = document.getElementById("photographer") as HTMLAnchorElement

export const renderCurrentMood = (moodTitle: string, description: string, imageUrl: string, photographer: string) => {


moodImgEl.classList.add("moodImg")
moodTitleEl.textContent = moodTitle;
moodDescription.textContent = description
moodImgEl.src = imageUrl
moodImgEl.classList.add("moodImg")
photographerEl.textContent = photographer + ` from Unsplash`
  
}