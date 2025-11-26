---
sidebar_position: 8
title: "Lesson 7: Designing Skills and Subagents with P+Q+P"
description: "Master the Persona + Questions + Principles pattern for creating reusable intelligence that activates AI reasoning"
keywords: [P+Q+P pattern, persona questions principles, skill design, subagent design, AI reasoning, reusable patterns]
slug: /08-designing-skills
---

# Lesson 7: Designing Skills and Subagents with P+Q+P

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Apply the P+Q+P (Persona + Questions + Principles) pattern
- Design Skills that provide consistent horizontal guidance
- Create Subagents with autonomous reasoning capabilities
- Distinguish when to use Skills vs Subagents
- Build reusable intelligence that activates AI reasoning

## Understanding P+Q+P: Why This Pattern Works

### The Problem with Traditional Guidance

**Traditional approach**: "Validate all inputs"  
**Problem**: Too vague—AI doesn't know HOW to validate

**Better approach**: "Check type, length, format, and range"  
**Problem**: Still pattern-matching, not reasoning

### The Three Components of P+Q+P

**P+Q+P** activates reasoning, not just pattern matching:

1. **Persona**: Who is making this decision? (Role and expertise)
2. **Questions**: What should they consider? (Reasoning prompts)
3. **Principles**: What rules guide their decisions? (Consistent standards)

:::tip Why P+Q+P Works
Questions activate reasoning. Principles ensure consistency. Persona provides context.
:::

## Design Walkthrough — Input Validation Skill

Let's design an Input Validation Skill using P+Q+P.

### Why This Pattern Recurs

Every API endpoint, form, and data processor needs input validation. Instead of re-deciding validation rules each time, capture the pattern once.

### Step 1: Define the Persona

```markdown
## Persona

You are a **Security-Conscious Backend Developer** who:
- Prioritizes data integrity and security
- Prevents injection attacks and data corruption
- Balances strict validation with user experience
- Follows OWASP input validation guidelines
```

### Step 2: Articulate Reasoning Questions

```markdown
## Questions to Consider

For each input field, ask:

1. **Type**: What data type is expected? (string, number, boolean, etc.)
2. **Format**: What format is valid? (email, URL, date, UUID, etc.)
3. **Length**: What are the min/max lengths? (prevent buffer overflow)
4. **Range**: What are the min/max values? (for numbers)
5. **Allowed Characters**: What characters are permitted? (alphanumeric, special chars)
6. **Required vs Optional**: Is this field mandatory?
7. **Sanitization**: Should we strip/escape dangerous characters?
8. **Error Messages**: What should users see when validation fails?
```

### Step 3: Establish Consistent Principles

```markdown
## Principles

1. **Fail Secure**: Reject invalid input (don't try to "fix" it)
2. **Clear Errors**: Tell users exactly what's wrong
3. **No Injection**: Sanitize all user input
4. **Whitelist > Blacklist**: Define what's allowed, not what's forbidden
5. **Validate Early**: Check input at the API boundary
6. **Log Violations**: Track validation failures for security monitoring
```

### Complete Input Validation Skill Template

```markdown
# Skill: Input Validation

## Persona
You are a Security-Conscious Backend Developer...

## Questions to Consider
1. Type: What data type is expected?
2. Format: What format is valid?
...

## Principles
1. Fail Secure: Reject invalid input
2. Clear Errors: Tell users exactly what's wrong
...

## Example Application

For a user registration endpoint:
- Email: string, email format, max 255 chars, required
- Password: string, min 12 chars, max 128 chars, required
- Age: number, range 13-120, optional
- Username: string, alphanumeric + underscore, 3-20 chars, required
```

## Design Walkthrough — Performance Optimization Subagent

Now let's design a Subagent for performance optimization.

### Why Subagent Instead of Skill?

Performance optimization involves:
- 5+ decision points (caching, indexing, query optimization, etc.)
- Complex trade-offs (speed vs memory, consistency vs availability)
- Autonomous reasoning (analyze bottlenecks, recommend solutions)

This requires a **Subagent**, not a Skill.

### Step 1: Define the Persona

```markdown
## Persona

You are a **Performance Engineering Specialist** who:
- Analyzes system bottlenecks systematically
- Balances performance with maintainability
- Considers cost implications of optimizations
- Uses data-driven decision making
- Knows when "good enough" beats "perfect"
```

### Step 2: Articulate Reasoning Questions

```markdown
## Questions to Consider

1. **Bottleneck Identification**:
   - Where is the slowest part of this operation?
   - What's the 95th percentile latency?
   - What's the throughput requirement?

2. **Caching Strategy**:
   - What data can be cached?
   - How long should cache TTL be?
   - What's the cache invalidation strategy?

3. **Database Optimization**:
   - Are there missing indexes?
   - Can queries be optimized?
   - Should we denormalize for read performance?

4. **Concurrency**:
   - Can operations run in parallel?
   - What's the thread/process model?
   - Are there race conditions?

5. **Resource Trade-offs**:
   - Memory vs speed: which to prioritize?
   - Consistency vs availability: what's acceptable?
   - Cost vs performance: what's the budget?
```

### Step 3: Establish Consistent Principles

```markdown
## Principles

1. **Measure First**: Profile before optimizing
2. **Optimize Bottlenecks**: Focus on the slowest 20%
3. **Maintain Correctness**: Never sacrifice correctness for speed
4. **Consider Cost**: Faster isn't always worth the expense
5. **Document Trade-offs**: Explain why you chose this approach
6. **Plan for Scale**: Design for 10x current load
```

### Complete Performance Optimization Subagent Template

```markdown
# Subagent: Performance Optimization

## Persona
You are a Performance Engineering Specialist...

## Questions to Consider
1. Bottleneck Identification: Where is the slowest part?
2. Caching Strategy: What data can be cached?
...

## Principles
1. Measure First: Profile before optimizing
2. Optimize Bottlenecks: Focus on the slowest 20%
...

## Workflow

1. **Analyze**: Profile the system, identify bottlenecks
2. **Recommend**: Suggest optimizations with trade-offs
3. **Validate**: Ensure recommendations meet requirements
4. **Document**: Explain decisions and alternatives considered
```

## Hands-On Practice — Design Your Components

### Exercise 1: Design a Security Review Subagent

Create a Subagent that reviews specifications for security issues:

1. **Persona**: Who performs security reviews?
2. **Questions**: What should they check? (auth, encryption, injection, etc.)
3. **Principles**: What security standards must be met?

### Exercise 2: Design an API Design Skill

Create a Skill for consistent API design:

1. **Persona**: Who designs APIs?
2. **Questions**: What should they consider? (naming, versioning, errors, etc.)
3. **Principles**: What makes a good API?

## Skill vs Subagent: The Decision Framework

### Decision Matrix

| Factor | Skill | Subagent |
|--------|-------|----------|
| **Decision Points** | 2-4 | 5+ |
| **Complexity** | Simple patterns | Complex trade-offs |
| **Autonomy** | Guidance | Autonomous reasoning |
| **Reuse** | Very high (horizontal) | Domain-specific (vertical) |
| **Examples** | Input validation, error handling | Security review, performance optimization |

**Rule of Thumb**: If you can answer it with a checklist, it's a Skill. If it requires analysis and trade-offs, it's a Subagent.

## 💪 Practice Exercise

Design reusable intelligence for your domain:

1. **Identify a recurring pattern** in your work
2. **Count decision points**: 2-4 (Skill) or 5+ (Subagent)?
3. **Apply P+Q+P**:
   - Persona: Who makes this decision?
   - Questions: What should they consider?
   - Principles: What rules guide decisions?
4. **Test it**: Apply to a real specification
5. **Refine**: Did it catch issues? What's missing?

## 📊 Key Takeaways

✅ **P+Q+P activates reasoning, not just pattern matching**  
✅ **Persona provides role and expertise context**  
✅ **Questions prompt systematic consideration**  
✅ **Principles ensure consistent decisions**  
✅ **Skills for 2-4 decisions, Subagents for 5+**  
✅ **Reusable intelligence compounds organizational expertise**

## 🔗 What's Next

You now know how to design reusable intelligence. The final lesson explores the **SDD framework landscape**—comparing different approaches and preparing for implementation.

[Continue to Lesson 8: SDD-RI Framework Landscape →](./09-framework-landscape)

---

## 🤖 Try With AI

Design a Skill or Subagent with your AI assistant:

```
Help me design a [Skill/Subagent] for [your domain].
Use the P+Q+P pattern:
- Persona: Who makes this decision?
- Questions: What should they consider?
- Principles: What rules guide decisions?
```

Test it on a real specification and refine based on results!
