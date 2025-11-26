---
sidebar_position: 4
title: "Lesson 3: What is SDD? Anatomy of a Specification"
description: "Learn the four essential components of production-ready specifications: Intent, Success Criteria, Constraints, and Non-Goals"
keywords: [specification anatomy, SDD components, intent, success criteria, constraints, non-goals, evals-first]
slug: /04-what-is-sdd
---

# Lesson 3: What is SDD? Anatomy of a Specification

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Define the four essential components of a production-ready specification
- Write clear Intent statements that explain the "why" behind features
- Create testable Success Criteria (acceptance tests)
- Identify and document Constraints that must always be true
- Use Non-Goals to prevent scope creep and clarify boundaries
- Apply the Evals-First principle to specification design

## What Makes a Specification?

A specification is **not** a vague description. It's a clear, testable contract that answers:

1. **Intent**: What problem does this solve? (The "why")
2. **Success Criteria**: How do we know it works? (Testable outcomes)
3. **Constraints**: What must always be true? (Invariants and rules)
4. **Non-Goals**: What's intentionally NOT included? (Scope boundaries)

:::tip The Golden Rule
If someone can implement your spec in multiple incompatible ways, your spec is incomplete.
:::

## The Evals-First Principle

**Traditional approach**: Write code, then test it  
**SDD approach**: Define tests first, then write code to pass them

### Why Evals-First?

- **Clarity**: Forces you to define "done" before starting
- **Testability**: Ensures specifications are measurable
- **Alignment**: AI and humans agree on success criteria upfront
- **Quality**: Catches ambiguity before code is written

### Evals Come BEFORE Code

```
1. Write specification with success criteria
2. Define test cases that verify success criteria
3. Implement code to pass the tests
4. Verify implementation against specification
```

This is **Test-Driven Development (TDD)** applied to specifications.

## Anatomy of a Specification

Let's break down each component with a concrete example.

### Example: Configuration File Manager

**Problem**: Our app needs to read and write configuration files in JSON format.

### 1. Intent (What problem does this solve?)

**Intent** explains the "why" behind the feature:

```markdown
## Intent

Enable the application to persist user preferences and settings across sessions.
Users should be able to customize behavior without modifying code.
Configuration should be human-readable for manual editing if needed.
```

**Good Intent**:
- Explains the business value
- Describes the user need
- Provides context for decisions

**Bad Intent**:
- "We need a config file" (no why)
- "Store data" (too vague)

### 2. Success Criteria (How do we know it works?)

**Success Criteria** are testable outcomes:

```markdown
## Success Criteria

1. **Read Configuration**:
   - Load valid JSON from `config.json`
   - Return parsed object with all fields
   - Handle missing file gracefully (return defaults)

2. **Write Configuration**:
   - Save object as formatted JSON
   - Preserve existing fields not in the update
   - Create file if it doesn't exist

3. **Error Handling**:
   - Invalid JSON returns clear error message
   - File permission errors are caught and reported
   - Malformed data doesn't crash the application
```

**Good Success Criteria**:
- Specific and measurable
- Cover happy path and edge cases
- Can be turned into automated tests

**Bad Success Criteria**:
- "It should work" (not measurable)
- "Handle errors properly" (too vague)

### 3. Constraints (What must always be true?)

**Constraints** are invariants and rules that must never be violated:

```markdown
## Constraints

1. **File Format**: Must be valid JSON (not YAML, TOML, or other formats)
2. **File Location**: Always read/write from `./config.json` (relative to app root)
3. **Atomic Writes**: Write to temp file, then rename (prevent corruption)
4. **Backward Compatibility**: New versions must read old config files
5. **No Secrets**: Configuration must not contain passwords or API keys
```

**Good Constraints**:
- Non-negotiable requirements
- Technical limitations
- Security/compliance rules

**Bad Constraints**:
- "Should be fast" (not specific)
- "Use best practices" (too vague)

### 4. Non-Goals (What's intentionally NOT included?)

**Non-Goals** prevent scope creep and clarify boundaries:

```markdown
## Non-Goals

1. **Not a database**: This is for simple key-value config, not complex data storage
2. **No encryption**: Sensitive data should use a separate secrets manager
3. **No remote sync**: Configuration is local-only (no cloud backup)
4. **No schema validation**: Caller is responsible for validating config structure
5. **No hot-reloading**: Application must restart to pick up config changes
```

**Why Non-Goals Matter**:
- Prevent feature creep
- Clarify what the component does NOT do
- Help AI avoid over-engineering
- Set expectations for future work

## 📝 Complete Example: CSV Data Exporter

Let's see all four components together:

### Specification: CSV Data Exporter

#### Intent

Enable users to export table data to CSV format for use in Excel, Google Sheets, or data analysis tools. This supports reporting workflows and data portability.

#### Success Criteria

1. **Export Functionality**:
   - Convert array of objects to CSV format
   - Include header row with column names
   - Handle special characters (commas, quotes, newlines) correctly
   - Return CSV as string

2. **Data Handling**:
   - Support nested objects (flatten to dot notation)
   - Handle null/undefined values (output as empty string)
   - Preserve number formatting (no scientific notation)

3. **Edge Cases**:
   - Empty array returns header row only
   - Single object returns header + one data row
   - Missing fields in some objects output empty cells

#### Constraints

1. **Format**: RFC 4180 compliant CSV (standard format)
2. **Encoding**: UTF-8 with BOM for Excel compatibility
3. **Line Endings**: CRLF (`\r\n`) for Windows compatibility
4. **Quote Escaping**: Double quotes escaped as `""`
5. **No Dependencies**: Pure JavaScript (no external CSV libraries)

#### Non-Goals

1. **Not a parser**: This only exports (doesn't import CSV)
2. **No streaming**: Entire dataset must fit in memory
3. **No custom delimiters**: Always comma (not tab or semicolon)
4. **No Excel formulas**: Data only (no `=SUM()` etc.)
5. **No compression**: Output is plain text (not gzipped)

## 💪 Practice Exercise

Write a specification for a feature you're building:

1. **Choose a feature** from your current project
2. **Write Intent**: Why does this feature exist?
3. **Define Success Criteria**: How will you test it?
4. **List Constraints**: What rules must never be violated?
5. **Clarify Non-Goals**: What is this NOT supposed to do?

**Self-Check**:
- Could someone implement this without asking questions?
- Are the success criteria testable?
- Are the constraints specific and measurable?
- Do the non-goals prevent obvious scope creep?

## 📊 Key Takeaways

✅ **Specifications have four components**: Intent, Success Criteria, Constraints, Non-Goals  
✅ **Evals-First means defining tests before code**  
✅ **Intent explains the "why" and provides context**  
✅ **Success Criteria must be testable and specific**  
✅ **Constraints are non-negotiable rules**  
✅ **Non-Goals prevent scope creep and over-engineering**

## 🔗 What's Next

Now that you know what makes a good specification, the next lesson teaches you how to **build your first spec together** with AI through collaborative refinement.

[Continue to Lesson 4: Build Your First Spec Together →](./05-build-first-spec)

---

## 🤖 Try With AI

Ask your AI assistant to help you write a specification:

```
I need to build [your feature]. Help me write a specification with:
1. Intent (why this feature exists)
2. Success Criteria (testable outcomes)
3. Constraints (rules that must be true)
4. Non-Goals (what this doesn't do)
```

See how AI helps you discover requirements you hadn't considered!
