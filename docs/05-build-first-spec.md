---
sidebar_position: 5
title: "Lesson 4: Build Your First Spec Together"
description: "Learn to collaborate with AI to create production-ready specifications through iterative refinement and validation"
keywords: [collaborative specification, AI collaboration, spec refinement, calculator spec, iterative development]
slug: /05-build-first-spec
---

# Lesson 4: Build Your First Spec Together

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Collaborate with AI to discover missing requirements
- Apply iterative refinement to improve specification quality
- Validate specifications through test scenarios
- Recognize the specification-development feedback loop
- Transform user stories into technical specifications

## The Project: Basic Calculator Module

Let's build a specification for a calculator module together. This hands-on exercise demonstrates the collaborative workflow.

## The Spec-First Workflow

```
1. Start with user stories (the "why")
2. Define acceptance criteria (the "what")
3. Discover edge cases (the "gotchas")
4. Validate with test scenarios
5. Iterate until complete
```

## User Stories (The "Why")

**As a** developer building a math application  
**I want** a reliable calculator module  
**So that** I can perform basic arithmetic operations

## Acceptance Criteria (The "What")

### Must Support:
- Addition: `add(a, b)` returns `a + b`
- Subtraction: `subtract(a, b)` returns `a - b`
- Multiplication: `multiply(a, b)` returns `a * b`
- Division: `divide(a, b)` returns `a / b`

### Must Handle:
- Positive and negative numbers
- Decimal numbers
- Zero as an operand
- Division by zero (return error, don't crash)

## Edge Cases & Design Decisions (The "Gotchas")

### Discovered Through Collaboration:

**Q**: What happens with division by zero?  
**A**: Return `{ error: "Division by zero" }` instead of throwing

**Q**: How should we handle floating-point precision?  
**A**: Round to 10 decimal places to avoid `0.1 + 0.2 = 0.30000000000000004`

**Q**: What about very large numbers?  
**A**: Use JavaScript's Number type (no BigInt for now)

**Q**: Should we validate input types?  
**A**: Yes, return error for non-numeric inputs

## The Complete Calculator Specification

### Intent
Provide a reliable, well-tested calculator module for basic arithmetic operations. This will be used in financial calculations, so precision and error handling are critical.

### Success Criteria

1. **Addition**:
   - `add(5, 3)` returns `8`
   - `add(-5, 3)` returns `-2`
   - `add(0.1, 0.2)` returns `0.3` (not `0.30000000000000004`)

2. **Subtraction**:
   - `subtract(10, 3)` returns `7`
   - `subtract(3, 10)` returns `-7`

3. **Multiplication**:
   - `multiply(4, 5)` returns `20`
   - `multiply(-4, 5)` returns `-20`
   - `multiply(0, 100)` returns `0`

4. **Division**:
   - `divide(10, 2)` returns `5`
   - `divide(10, 3)` returns `3.3333333333` (rounded to 10 decimals)
   - `divide(10, 0)` returns `{ error: "Division by zero" }`

5. **Input Validation**:
   - Non-numeric inputs return `{ error: "Invalid input" }`
   - `null` or `undefined` inputs return `{ error: "Invalid input" }`

### Constraints

1. **Precision**: Round results to 10 decimal places
2. **Error Handling**: Never throw exceptions, always return error objects
3. **Type Safety**: Validate inputs are numbers
4. **No Dependencies**: Pure JavaScript (no external math libraries)
5. **Immutability**: Functions are pure (no side effects)

### Non-Goals

1. **Not a scientific calculator**: No trigonometry, logarithms, etc.
2. **No expression parsing**: Caller provides numbers, not strings like `"2+2"`
3. **No BigInt support**: Standard JavaScript numbers only
4. **No currency formatting**: Returns numbers, not formatted strings
5. **No operation history**: Stateless functions only

## Quality Iteration (Validate and Refine)

### Step 1: Apply the Quality Checklist

- ✅ Intent is clear
- ✅ Success criteria are testable
- ✅ Constraints are specific
- ✅ Non-goals prevent scope creep
- ✅ Edge cases are documented

### Step 2: Identify Vagueness (AI as Co-Reviewer)

Ask AI: "What's unclear or ambiguous in this spec?"

AI might find:
- "What about `Infinity` as a result?"
- "Should we support more than 2 operands?"
- "What's the behavior for `NaN` inputs?"

### Step 3: Refine (You as Teacher)

You clarify:
- `Infinity` is allowed (from `divide(1, 0)` edge case)
- Two operands only (keep it simple)
- `NaN` inputs return error

### Step 4: Validate Together (Convergence)

Both you and AI agree the spec is complete and unambiguous.

## Test Your Specification (Collaborative Validation)

### ✅ Scenario 1: Clear Spec → Clean Implementation

**Given**: Complete specification above  
**When**: AI implements the calculator  
**Then**: Code passes all test cases on first try

### ❌ Scenario 2: Spec Had Gaps → AI Asks Questions

**Given**: Spec missing division-by-zero handling  
**When**: AI implements division  
**Then**: AI asks "What should happen when dividing by zero?"

### ⚠️ Scenario 3: Spec Was Ambiguous → AI Makes Wrong Assumptions

**Given**: Spec says "handle errors properly"  
**When**: AI implements error handling  
**Then**: AI throws exceptions instead of returning error objects

## The Specification-Development Feedback Loop

```
1. Write initial spec
2. AI implements code
3. Discover gaps/ambiguities
4. Refine spec
5. AI updates implementation
6. Repeat until convergence
```

**Key Insight**: Each iteration makes the spec better for future features.

## 💪 Extension Challenges

### Challenge 1: Add Exponentiation

Add `power(base, exponent)` to the calculator:
- Write the specification first
- Include success criteria, constraints, and non-goals
- Consider edge cases (negative exponents, fractional exponents)

### Challenge 2: Build a CLI Calculator

Extend the spec to include a command-line interface:
- How should users input operations?
- What's the output format?
- How are errors displayed?

### Challenge 3: Map to Test-Driven Development

Convert your success criteria into actual test cases:
- Use a testing framework (Jest, Mocha, etc.)
- Write tests before implementation
- Verify tests fail, then implement to make them pass

## 📊 Key Takeaways

✅ **User stories come before technical specs**  
✅ **Progressive complexity reveals spec requirements**  
✅ **Edge cases ARE the specification** (not afterthoughts)  
✅ **Test scenarios ARE executable contracts**  
✅ **Iterative validation catches ambiguity early**  
✅ **Specification is a design activity** (not just documentation)

## 🔗 What's Next

You've learned to write specifications collaboratively. The next lesson teaches how to scale this across teams with **Constitutions**—shared rules that apply to all specifications.

[Continue to Lesson 5: Your Team Needs Shared Rules →](./06-shared-rules)

---

## 🤖 Try With AI

Build a specification for a feature you need:

1. Start with a user story
2. Collaborate with AI to define acceptance criteria
3. Discover edge cases together
4. Write the complete specification
5. Have AI implement it
6. Compare the quality to code from a vague prompt

**Reflection**: How much iteration did the spec eliminate?
