# BLOG POST EXPORT
> **Instructions for Medium / Substack:**
> 1. Copy the "Title" below and paste it as your headline.
> 2. Copy the "Content" body and paste it into the editor.
> 3. **Images**: You will need to upload the images manually. They are located in your project at `public/blog/build-summary.png` and `public/blog/walkthrough.png`.
> 4. **SEO CRITICAL**: Before publishing, go to the "SEO Settings" or "Advanced Settings" of the post editor and set the **Canonical Link** to:
>    `https://krishx02.github.io/blog/building-portfolio-with-antigravity-review`
>    *(This tells Google that your personal site is the original source, so you don't hurt your own SEO.)*

---

## Title
Building My Portfolio with Antigravity: A Hands-On Review

## Content

I built my personal site [krishx02.github.io](http://krishx02.github.io) using Antigravity. In the process, I learned a lot about how it stacks up against Cursor and Opencode.

**My prediction:** Antigravity is most likely going to be the winner long term, but it's not *quite* ready yet.

---

### The Benefits of Antigravity

#### 1. "Show Your Work" Verification Loop

Compared to Cursor and Opencode, one of the big things I noticed is Antigravity's **verification loop**. After every major task, it gives you a really clear summary of what the agent just executed.

*[Insert Image: build-summary.png]*

With Cursor and Opencode, the CLI tells you what it did. Antigravity gives you *that*, but the real magic happens in the **Walkthrough**.

*[Insert Image: walkthrough.png]*

It tells you exactly what the agent completed, which is pretty neat! It gives you more of a sense of "control," which is helpful for developers still wary about full agentic capabilities.

#### 2. Organized Artifacts

Antigravity gives you easy references to all of your "artifacts." What are artifacts? They're living documents that organize the agent's thoughts, track complex tasks, and communicate progress. They live in a dedicated folder (similar to where plans are stored in Cursor) and typically include:

- **task.md** – the checklist
- **implementation_plan.md** – the blueprint
- **walkthrough.md** – the proof

**One hidden feature I discovered:** you can leave comments directly inside these artifact files, and Gemini will read them on the next run.

For example, if you open `task.md` or `implementation_plan.md` and add a note like:

```md
<!-- Hey Gemini, skip this step, I already did it manually -->
```

or even just plain text:

```md
**USER NOTE:** Please use TypeScript instead of plain JS for this file.
```

The agent will see it and adjust its behavior. This is a subtle but powerful way to "steer" the agent without having to re-explain context in the chat.

---

### The Drawbacks

#### Rate Limits on Opus

The main thing I dislike is Antigravity's rate limits on Opus 4.5, which forces you to try the Gemini models instead (which are still pretty good!). I did encounter one bug that Opus solved but Gemini couldn't.

At some point, the models themselves won't be the bottleneck. They'll stop producing bugs. The question will be how well the *agentic products* harness them.

#### Design Polish

I also think Antigravity's design is objectively worse than Cursor's. Cursor's agent panel is cleaner, and the whole UI just *feels* more intuitive. Little things add up: smoother transitions, better visual hierarchy, and a more refined overall experience. I think that's largely thanks to their head of design, Ryo Lu (formerly design @ Notion). I'm pretty lucky that at work I get to use Cursor to keep learning how to harness agentic capabilities.

#### Slow to Keep Up

Antigravity is part of Google, and that comes with trade-offs. One downside is pace. Google isn't setting the standard here. They're following it.

The clearest example: Antigravity just added "skills," but they were the last major player to do so. Cursor, Opencode, and Claude Code all shipped skills quickly and kept iterating. Google took significantly longer. That's the difference between a large enterprise and a small, focused team.

That said, I think Google will keep up just fine. They have the resources. But if you want to be on the cutting edge, smaller tools are moving faster right now. I have to say, there's a decent chance I'll be picking up a Claude Code subscription soon. The pace and intensity they're putting into their product is genuinely impressive.

---

### What's Next

As I continue exploring agentic capabilities, I'm going to try building a **Google Photos clone** on GCP (Google Cloud Platform) to see how quickly I can spin something up in a new cloud. I have lots of experience in AWS, so this will be a fun challenge!

Thank you so much for reading. Happy coding!
