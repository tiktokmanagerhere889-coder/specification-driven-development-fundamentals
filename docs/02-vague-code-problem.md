---
sidebar_position: 2
title: "Lesson 1: Vague Code and the AI Partner Problem"
description: "Discover why vague requirements are costly when working with AI and learn how to diagnose and fix vagueness through collaborative specification"
keywords: [vague code, AI development, specification quality, requirements clarity, vibe coding]
slug: /02-vague-code-problem
---

# Lesson 1: Vague Code and the AI Partner Problem

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Identify the symptoms and costs of "vibe coding" (vague requirements)
- Explain why AI coding assistants struggle with ambiguous specifications
- Diagnose vagueness in your own project requirements
- Apply collaborative specification techniques to eliminate vagueness
- Measure the impact of specification quality on development velocity

## The Problem with Vibe Coding

**Vibe coding** is when you give AI a vague prompt and hope it "gets the vibe" of what you want. It feels fast initially, but leads to:

- **Endless iterations**: "That's not quite right... try again"
- **Hidden assumptions**: AI fills gaps with its own interpretations
- **Technical debt**: Code that works but doesn't match actual requirements
- **Frustration**: Both you and the AI waste time guessing

:::warning Real Cost
A 5-minute vague prompt can lead to 2 hours of back-and-forth refinement. A 15-minute collaborative spec saves 90 minutes of iteration.
:::

### Why This Happens

AI coding assistants are **literal-minded**:
- They execute exactly what you specify
- They can't read your mind or infer unstated requirements
- They make reasonable assumptions when specs are vague
- Their "reasonable" might not match your "reasonable"

## 🔬 Experience It: Build a Login System (The Wrong Way)

Let's see vibe coding in action.

### Step 1: Give Your AI a Vague Prompt

```
Build a login system for my web app.
```

### Step 2: See What It Generates

The AI might create:
- Username/password authentication
- No password strength requirements
- No "forgot password" flow
- No rate limiting
- Plain text password storage (security disaster!)

### Step 3: The Frustration Moment

You realize:
- "Wait, I needed email login, not username"
- "Where's the 'remember me' checkbox?"
- "This doesn't handle password resets"
- "The passwords aren't even hashed!"

**Result**: You've wasted 30 minutes, and the code needs to be rewritten.

## 💡 The Solution: Collaborate on Clear Specifications

Instead of vague prompts, work **with** AI to build a complete specification.

### Step 1: Discover Missing Requirements

Start a dialogue:

```
I need a login system. What requirements should I specify?
```

AI helps you discover:
- Authentication method (email vs username)
- Password requirements (length, complexity)
- Security features (hashing, rate limiting)
- User experience (remember me, password reset)
- Error handling (invalid credentials, locked accounts)

### Step 1.5: Provide Your Constraints

Add your specific requirements:

```
- Use email for login (not username)
- Passwords must be 12+ characters
- Include "remember me" for 30 days
- Rate limit: 5 failed attempts = 15-minute lockout
- Use bcrypt for password hashing
```

### Step 2: Converge Together (Iterative Refinement)

AI suggests patterns you didn't consider:
- "Should we add two-factor authentication support?"
- "What about social login (Google, GitHub)?"
- "Do you want email verification for new accounts?"

You provide constraints AI doesn't know:
- "No social login for now (future feature)"
- "Yes to email verification"
- "2FA is optional, not required"

**Result**: A complete, unambiguous specification in 15 minutes.

## 📝 Generate Code From the Collaborative Spec

Now when you ask AI to implement the login system, it has:
- Clear authentication method
- Specific security requirements
- Defined user flows
- Known edge cases

### Compare the Results

| Vibe Coding | Collaborative Spec |
|-------------|-------------------|
| 5 min prompt + 2 hours iteration | 15 min spec + 30 min implementation |
| Multiple rewrites | Single implementation |
| Missing features discovered late | All features planned upfront |
| Security gaps | Security built-in |

## 🎓 The Aha Moment

**Vagueness isn't faster—it's slower.**

Time spent on specifications is **investment**, not overhead. It:
- Reduces iteration cycles
- Catches missing requirements early
- Aligns AI output with actual needs
- Creates documentation for future reference

## 💪 Practice Exercise

Take a vague requirement from your current project:

1. **Identify vagueness**: What's unclear or ambiguous?
2. **Ask discovery questions**: What details are missing?
3. **Collaborate with AI**: Let AI suggest patterns and edge cases
4. **Provide constraints**: Add your specific requirements
5. **Validate completeness**: Could someone implement this without guessing?

## 📊 Key Takeaways

✅ **Vague prompts feel fast but waste time in iteration**  
✅ **AI is literal-minded and needs clear specifications**  
✅ **Collaborative specification is faster than endless refinement**  
✅ **Specifications are investment, not overhead**  
✅ **Good specs catch problems before code is written**

## 🔗 What's Next

Now that you understand the cost of vagueness, the next lesson explores **why specifications matter NOW**—why 2025 is the inflection point for specification-driven development.

[Continue to Lesson 2: Why Specs Matter NOW →](./03-why-specs-matter)

---

## 🤖 Try With AI

Open your AI coding assistant and try this exercise:

1. Give it a vague prompt for a feature you need
2. Note what it generates and what's missing
3. Then collaborate to build a complete spec
4. Compare the quality of code generated from each approach

**Reflection**: How much time did the collaborative spec save you?
