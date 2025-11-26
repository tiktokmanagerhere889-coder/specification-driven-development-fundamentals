---
sidebar_position: 6
title: "Lesson 5: Your Team Needs Shared Rules - Constitutions"
description: "Learn how to scale specification quality across teams using Constitutions, Memory Banks, and organizational learning"
keywords: [constitutions, memory banks, team standards, organizational learning, quality at scale, ADR, PHR]
slug: /06-shared-rules
---

# Lesson 5: Your Team Needs Shared Rules - Constitutions

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Explain why individual specs aren't enough for team-scale development
- Create Constitutions that enforce quality standards automatically
- Build Memory Banks that capture organizational knowledge
- Use Architectural Decision Records (ADRs) to document key choices
- Apply Prompt History Records (PHRs) to capture the specification journey
- Scale specification quality across teams

## The Problem You Haven't Faced Yet

You've learned to write good specifications. But what happens when:

- **10 developers** are writing specs for different features?
- **New team members** join and don't know your standards?
- **The same mistakes** keep happening across different projects?
- **Lessons learned** from bugs aren't captured anywhere?

**Individual specs are necessary but not sufficient.**

## The Solution: Shared Rules That Apply to Everything

**Constitutions** are rules that apply to ALL specifications in your project:

- Security requirements (always hash passwords)
- Performance standards (API responses < 200ms)
- Error handling patterns (never throw, return error objects)
- Accessibility rules (WCAG 2.1 AA compliance)
- Code style preferences (functional vs OOP)

:::tip The Power of Constitutions
Write the rule once, enforce it everywhere. AI checks every spec against the Constitution automatically.
:::

## How to Scale Specs Across Teams

### Without Constitutions:
```
Developer A: Writes great security spec
Developer B: Forgets to specify password hashing
Developer C: Uses different error handling pattern
Result: Inconsistent codebase, security gaps
```

### With Constitutions:
```
Constitution: "All password fields must use bcrypt with cost factor 12"
Every spec: AI checks against Constitution
Any violation: AI flags it before code is written
Result: Consistent security across all features
```

## Constitutions Enforce Quality at Scale

### Example Constitution Rules:

```markdown
# Security Constitution

## Password Storage
- MUST use bcrypt with cost factor 12 or higher
- NEVER store passwords in plain text
- NEVER log passwords (even hashed)

## API Authentication
- All API endpoints MUST require authentication (except /health)
- Use JWT tokens with 1-hour expiration
- Refresh tokens valid for 30 days

## Input Validation
- ALWAYS validate and sanitize user input
- Use parameterized queries (prevent SQL injection)
- Escape HTML output (prevent XSS)

## Error Messages
- NEVER expose stack traces to users
- NEVER reveal system internals in error messages
- Log detailed errors server-side only
```

## What Goes in a Constitution?

### 1. Product Vision
- Target users and use cases
- Core value propositions
- Quality standards

### 2. Architecture Patterns
- Preferred design patterns (MVC, microservices, etc.)
- Technology stack decisions
- Integration patterns

### 3. Technology Stack
- Programming languages and versions
- Frameworks and libraries
- Database and infrastructure choices

### 4. Security Rules (Non-Negotiable)
- Authentication and authorization
- Data encryption standards
- Compliance requirements (GDPR, HIPAA, etc.)

### 5. Quality Standards
- Performance benchmarks
- Accessibility requirements
- Testing coverage minimums

### 6. Common Patterns and Anti-Patterns

**Patterns** (Do this):
- Use environment variables for configuration
- Implement retry logic for external API calls
- Cache frequently accessed data

**Anti-Patterns** (Don't do this):
- Hard-code credentials in source code
- Ignore error handling
- Use global variables for state

## How It Works in Practice

### Scenario: Developer writes password reset feature

**Without Constitution**:
```markdown
Spec: "Allow users to reset their password via email"
```

**With Constitution**:
```markdown
Spec: "Allow users to reset their password via email"

AI Check Against Constitution:
❌ Missing: Password hashing requirement (bcrypt cost 12)
❌ Missing: Token expiration time
❌ Missing: Rate limiting for reset requests
⚠️  Warning: No mention of email verification

Developer adds missing requirements before implementation.
```

## Encoding Lessons Learned: Bug → Rule

When a bug is found, add it to the Constitution:

### Example: Production Bug

**Bug**: User uploaded 500MB file, crashed server  
**Fix**: Add file size validation  
**Constitution Rule**: "All file uploads MUST have size limits (max 10MB for images, 50MB for documents)"

**Result**: Future specs automatically include file size limits.

## The Power at Scale

### Individual Specs:
- Each developer writes their own rules
- Inconsistent quality
- Repeated mistakes
- Knowledge lost when people leave

### Constitutions:
- Shared rules for everyone
- Consistent quality
- Mistakes captured and prevented
- Organizational knowledge preserved

## Beyond Constitution: Capturing the Journey

### Prompt History Records (PHR): Capturing the Journey

**PHRs** document how you arrived at a specification:

```markdown
# PHR: User Authentication System

## Initial Prompt
"Build a login system"

## Refinement 1
Added: Email-based login, password requirements

## Refinement 2
Added: Rate limiting, account lockout

## Refinement 3
Added: 2FA support, session management

## Final Spec
[Link to complete specification]

## Key Decisions
- Chose JWT over sessions for scalability
- Decided against social login (future feature)
- Set password minimum to 12 characters (security team requirement)
```

**Why PHRs Matter**:
- Show the reasoning behind decisions
- Help new team members understand context
- Prevent re-litigating settled questions

### Architectural Decision Records (ADR): Documenting Mutable Decisions

**ADRs** capture important technical decisions:

```markdown
# ADR 001: Use PostgreSQL for Primary Database

## Status
Accepted

## Context
We need a reliable database for user data and transactions.

## Decision
Use PostgreSQL 15 as the primary database.

## Consequences
Positive:
- ACID compliance for financial transactions
- Rich query capabilities
- Strong ecosystem and tooling

Negative:
- Requires more ops expertise than managed services
- Vertical scaling limits

## Alternatives Considered
- MongoDB: Rejected due to lack of ACID guarantees
- MySQL: Rejected due to weaker JSON support
```

## 💪 Practice Exercise

Create a mini-Constitution for your project:

1. **Security Rules**: What security requirements apply to all features?
2. **Error Handling**: How should errors be handled consistently?
3. **Performance**: What are your performance standards?
4. **Anti-Patterns**: What mistakes should be avoided?

Then test it:
- Take an existing spec
- Check it against your Constitution
- What's missing?
- What would AI have caught automatically?

## 📊 Key Takeaways

✅ **Individual specs aren't enough for team-scale development**  
✅ **Constitutions enforce quality standards automatically**  
✅ **Shared rules prevent repeated mistakes**  
✅ **Lessons learned become organizational knowledge**  
✅ **PHRs capture the specification journey**  
✅ **ADRs document important technical decisions**

## 🔗 What's Next

You've mastered SDD fundamentals. The next lesson introduces **Reusable Intelligence**—transforming recurring patterns into Skills and Subagents that scale your expertise.

[Continue to Lesson 6: Introduction to Reusable Intelligence →](./07-reusable-intelligence)

---

## 🤖 Try With AI

Ask your AI assistant:

```
Help me create a Constitution for my project. What rules should apply to all specifications?
```

Start with 3-5 rules, then expand as you discover patterns.
