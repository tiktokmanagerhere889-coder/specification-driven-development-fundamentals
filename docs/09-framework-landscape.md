---
sidebar_position: 9
title: "Lesson 8: SDD-RI Framework Landscape & What's Next"
description: "Compare four SDD approaches (Kiro, Spec-Kit, Spec-Kit Plus, Tesel) and understand why Spec-Kit Plus is the recommended starting point"
keywords: [SDD frameworks, Kiro, Spec-Kit, Spec-Kit Plus, Tesel, framework comparison, implementation readiness]
slug: /09-framework-landscape
---

# Lesson 8: SDD-RI Framework Landscape & What's Next

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Compare four major SDD approaches and their trade-offs
- Explain why Spec-Kit Plus is recommended for learning
- Understand when to use each framework
- Recognize the pedagogical progression from fundamentals to implementation
- Prepare for hands-on implementation with Spec-Kit Plus

## Know Your Context

Before choosing a framework, answer these questions:

### Question 1: Who's Building This?

- **Solo developer**: Simpler frameworks (Kiro, basic Spec-Kit)
- **Small team (2-5)**: Spec-Kit or Spec-Kit Plus
- **Large organization**: Spec-Kit Plus or Tesel

### Question 2: What's the Problem Scale?

- **Prototype/MVP**: Kiro (start simple)
- **Production app**: Spec-Kit Plus (balance simplicity and power)
- **Enterprise system**: Tesel (maximum rigor)

### Question 3: Are There Regulatory/Compliance Constraints?

- **No compliance**: Any framework
- **Some compliance** (SOC 2, ISO): Spec-Kit Plus
- **Heavy compliance** (HIPAA, financial): Tesel

## Four SDD Approaches

### 1: Kiro — "Start Simple"

**Philosophy**: Minimal structure, maximum flexibility

**What It Is**:
- Lightweight specification format
- No mandatory tooling
- Focus on intent and success criteria
- Minimal ceremony

**Best For**:
- Solo developers
- Prototypes and MVPs
- Learning SDD basics
- Projects with minimal compliance

**Strengths**:
- Easy to start
- Low overhead
- Flexible

**Weaknesses**:
- Scales poorly to teams
- No built-in governance
- Inconsistent quality without discipline

**Example**:
```markdown
# Feature: User Login

## Intent
Allow users to access their accounts securely.

## Success Criteria
- User can log in with email and password
- Invalid credentials show error
- Successful login redirects to dashboard
```

### 2: Spec-Kit (GitHub's Framework) — "Strong Governance"

**Philosophy**: Structured specifications with built-in quality checks

**What It Is**:
- Standardized specification template
- Constitution enforcement
- Quality checklist
- Workflow integration (GitHub Actions)

**Best For**:
- Teams (5-20 developers)
- Production applications
- Organizations needing consistency
- Projects with moderate compliance

**Strengths**:
- Consistent quality
- Team scalability
- Built-in governance
- GitHub integration

**Weaknesses**:
- More ceremony than Kiro
- Requires team buy-in
- Learning curve

**Example**:
```markdown
# Specification: User Authentication

## Intent
[Clear business value]

## Success Criteria
[Testable outcomes]

## Constraints
[Non-negotiable rules]

## Non-Goals
[Scope boundaries]

## Constitution Check
✅ Security: Password hashing (bcrypt)
✅ Error Handling: Return error objects
✅ Performance: < 200ms response time
```

### 3: Spec-Kit Plus (Panaversity's Evolution) — "Spec-Kit + Intelligence"

**Philosophy**: Spec-Kit foundation + Reusable Intelligence

**What It Is**:
- Everything from Spec-Kit
- **Plus**: Skills and Subagents (reusable intelligence)
- **Plus**: P+Q+P pattern for intelligence design
- **Plus**: Orchestration workflows

**Best For**:
- Teams building organizational expertise
- Projects with recurring patterns
- Organizations investing in long-term quality
- Learning SDD-RI methodology

**Strengths**:
- All Spec-Kit benefits
- Reusable intelligence compounds value
- Scales to large teams
- Captures organizational knowledge

**Weaknesses**:
- Requires upfront investment in intelligence design
- More complex than basic Spec-Kit
- Team training needed

**Example**:
```markdown
# Specification: User Authentication

[Standard Spec-Kit format]

## Applied Intelligence

### Skills Used:
- Input Validation Skill
- Error Handling Skill
- Security Patterns Skill

### Subagents Consulted:
- Security Review Subagent
- Performance Optimization Subagent

### Decisions Made:
- Password: bcrypt cost 12 (Security Subagent recommendation)
- Rate limiting: 5 attempts/15min (Security Subagent)
- Session: JWT with 1hr expiration (Performance trade-off)
```

### 4: Tesel — "Specs as Source of Truth"

**Philosophy**: Specifications are executable and version-controlled

**What It Is**:
- Specifications in structured format (YAML/JSON)
- Automated code generation from specs
- Bi-directional sync (spec ↔ code)
- Formal verification

**Best For**:
- Highly regulated industries
- Mission-critical systems
- Large enterprises
- Projects requiring formal verification

**Strengths**:
- Specifications are always up-to-date
- Automated compliance checking
- Formal verification possible
- Maximum rigor

**Weaknesses**:
- Highest complexity
- Steepest learning curve
- Requires specialized tooling
- May be overkill for most projects

**Example**:
```yaml
specification:
  name: UserAuthentication
  version: 1.0.0
  
  intent:
    description: "Secure user access to accounts"
    business_value: "Protect user data and enable personalization"
  
  success_criteria:
    - id: SC001
      description: "User can log in with email and password"
      test: "test_valid_login_succeeds"
      
  constraints:
    - id: C001
      type: security
      rule: "passwords_must_be_hashed"
      algorithm: "bcrypt"
      cost_factor: 12
```

## Why This Book Teaches Spec-Kit Plus

### The SDD-RI Choice: Why Spec-Kit Plus

1. **Balanced Complexity**: Not too simple (Kiro), not too complex (Tesel)
2. **Reusable Intelligence**: Core differentiator for long-term value
3. **Proven Pedagogy**: Teaches fundamentals before advanced concepts
4. **Real-World Applicability**: Used in production by multiple teams
5. **Future-Proof**: Prepares you for any framework

### The Pedagogical Choice

This book's structure mirrors Spec-Kit Plus:

**Lessons 1-5 (Foundation)**: Core Spec-Kit concepts
- Vagueness diagnosis
- Why specs matter
- Specification anatomy
- Collaborative specification
- Constitutions

**Lessons 6-7 (Intelligence)**: Reusable Intelligence (the "Plus")
- Skills and Subagents
- P+Q+P pattern

**Lesson 8 (Bridge)**: Framework landscape
- Compare approaches
- Choose the right tool
- Prepare for implementation

## From Understanding to Implementation

### What You've Completed

✅ **Foundation**: You understand SDD fundamentals  
✅ **Intelligence**: You can design Skills and Subagents  
✅ **Landscape**: You know the framework options

### What's Next

The next chapter (Chapter 35 in the full book) covers:
- Hands-on Spec-Kit Plus implementation
- Setting up your development environment
- Creating your first Skills and Subagents
- Building complete specifications
- Deploying to production

### The Synthesis

You now have:
1. **Conceptual understanding** of SDD-RI
2. **Pattern recognition** for reusable intelligence
3. **Framework awareness** to choose the right tool
4. **Readiness** for hands-on implementation

## 💪 Practice Exercise

Evaluate your project needs:

1. **Context Assessment**:
   - Team size?
   - Project scale?
   - Compliance requirements?

2. **Framework Selection**:
   - Which framework fits your context?
   - What are the trade-offs?
   - What's your migration path?

3. **Implementation Planning**:
   - What Skills would you create first?
   - What Subagents would provide most value?
   - How would you introduce this to your team?

## 📊 Key Takeaways

✅ **Four frameworks serve different needs**: Kiro, Spec-Kit, Spec-Kit Plus, Tesel  
✅ **Spec-Kit Plus balances simplicity and power**  
✅ **Reusable intelligence is the strategic differentiator**  
✅ **Choose framework based on team size, scale, and compliance**  
✅ **This book prepares you for any SDD approach**

## 🔗 What's Next

Congratulations! You've completed the SDD-RI fundamentals. Test your knowledge with the assessment quiz, then you'll be ready for hands-on implementation.

[Take the Assessment Quiz →](./10-quiz)

---

## 🤖 Try With AI

Discuss framework selection with your AI assistant:

```
Based on my project [describe your project]:
- Team size: [number]
- Scale: [prototype/production/enterprise]
- Compliance: [none/moderate/heavy]

Which SDD framework should I use? Why?
```

See if AI's recommendation aligns with what you learned!
