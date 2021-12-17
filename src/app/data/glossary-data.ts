import { Dictionary } from "./data-lib";

export const GlossaryData : Dictionary = {
  title: 'Glossary',
  version: 3,
  sections: [
    {
      title: 'Programming',
      groups: [
        {
          title: "Main terms",
          subjects: [
            {
              subject: "Functional programming",
              ru: "Парадигма программирования, в которой процесс вычисления трактуется как вычисление значений функций в математическом понимании последних (в отличие от функций как подпрограмм в процедурном программировании).",
              en: "It is a programming paradigm where values are passed around into functions, and those functions are themselves values. Functional programmers often try to make large parts of their code referentially transparent."
            },
            {
              subject: "SOLID",
              ru: "",
              en: `
              It is an acronym (short name) for a group of five good principles (rules) in computer programming. SOLID allows programmers to write code that is easier to understand and change later on. Solid is often used with systems that use an object-oriented design.

              SOLID was promoted by Robert C. Martin but the name itself was created by Michael Feathers.

              * Single **responsibility** principle - Class has one job to do. Each change in requirements can be done by changing just one class.
              * **Open/closed** principle - Class is happy (open) to be used by others. Class is not happy (closed) to be changed by others.
              * Liskov **substitution** principle - Class can be replaced by any of its children. Children classes inherit parent's behaviours.
              * **Interface segregation** principle - When classes promise each other something, they should separate these promises (interfaces) into many small promises, so it's easier to understand.
              * **Dependency** inversion principle - When classes talk to each other in a very specific way, they both depend on each other to never change. Instead classes should use promises (interfaces, parents), so classes can change as long as they keep the promise.`
            },
            {
              subject: "Test-driven development (TDD)",
              ru: "",
              en: `It is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.

1. **Add a test**
  The adding of a new feature begins by writing a test that passes iff the feature's specifications are met. The developer can discover these specifications by asking about use cases and user stories. A key benefit of test-driven development is that it makes the developer focus on requirements before writing code. This is in contrast with the usual practice, where unit tests are only written after code.
2. **Run all tests**. The new test should fail for expected reasons
  This shows that new code is actually needed for the desired feature. It validates that the test harness is working correctly. It rules out the possibility that the new test is flawed and will always pass.
3. **Write the simplest code that passes the new test**
Inelegant or hard code is acceptable, as long as it passes the test. The code will be honed anyway in Step 5. No code should be added beyond the tested functionality.
4. **All tests should now pass**
If any fail, the new code must be revised until they pass. This ensures the new code meets the test requirements and does not break existing features.
5. **Refactor as needed, using tests after each refactor to ensure that functionality is preserved**
Code is refactored for readability and maintainability. In particular, hard-coded test data should be removed. Running the test suite after each refactor helps ensure that no existing functionality is broken.
      Examples of refactoring:
      * moving code to where it most logically belongs
      * removing duplicate code
      * making names self-documenting
      * splitting methods into smaller pieces
      * re-arranging inheritance hierarchies
6. **Repeat**
The cycle above is repeated for each new piece of functionality. Tests should be small and incremental, and commits made often. That way, if new code fails some tests, the programmer can simply undo or revert rather than debug excessively. When using external libraries, it is important not to write tests that are so small as to effectively test merely the library itself,[4] unless there is some reason to believe that the library is buggy or not feature-rich enough to serve all the needs of the software under development.

              `
            },
            {
              subject: "Inheritance (object-oriented programming)",
              ru: "",
              en: `In object-oriented programming, **inheritance** is the mechanism of basing an object or class upon another object
(prototype-based inheritance) or class (class-based inheritance), retaining similar implementation. Also defined
as deriving new classes (sub classes) from existing ones such as super class or base class and then forming them into
a hierarchy of classes. In most class-based object-oriented languages, an object created through inheritance, a
"child object", acquires all the properties and behaviors of the "parent object" , with the exception of: constructors,
destructor, overloaded operators and friend functions of the base class. Inheritance allows programmers to create classes
that are built upon existing classes, to specify a new implementation while maintaining the same behaviors
(realizing an interface), to reuse code and to independently extend original software via public classes and interfaces.
The relationships of objects or classes through inheritance give rise to a directed acyclic graph.

An **inherited** class is called a subclass of its parent class or super class. The term "inheritance"
is loosely used for both class-based and prototype-based programming, but in narrow use the term is reserved for
class-based programming (one class inherits from another), with the corresponding
technique in prototype-based programming being instead called delegation (one object delegates to another).`
            },
            {
              subject: "Polymorphism (computer science)",
              ru: "",
              en: `
In programming languages and type theory, **polymorphism** is the provision of a single interface to entities of different types
or the use of a single symbol to represent multiple different types.
The concept is borrowed from a principle in biology where an organism
or species can have many different forms or stages.

The most commonly recognized major classes of polymorphism are:

* Ad hoc polymorphism: defines a common interface for an arbitrary set of individually specified types.
* Parametric polymorphism: when one or more types are not specified by name but by abstract symbols that can represent any type.
* Subtyping (also called subtype polymorphism or inclusion polymorphism): when a name denotes instances of many different classes
related by some common superclass.
              `
            },
            {
              subject: "Encapsulation (computer programming)",
              ru: "",
              en: `
In object-oriented programming (OOP), **encapsulation** refers to the bundling of data with the
methods that operate on that data, or the restricting of direct access to some of an object's components.
Encapsulation is used to hide the values or state of a structured data object inside a class, preventing direct
access to them by clients in a way that could expose hidden implementation details or violate state invariance
maintained by the methods.

Publicly accessible methods are generally provided in the class to access or modify the state more abstractly.
In practice sometimes methods (so-called "getters" and "setters") are provided to access the values indirectly,
but, although not necessarily a violation of abstract encapsulation, they are often considered a sign-post of
potentially poor object-oriented programming (OOP) design practice (an Anti-pattern).

This mechanism is not unique to OOP. Implementations of abstract data types, e.g., modules, offer a similar
form of encapsulation. The similarity has been explained by programming language theorists in terms of existential types.`
            }
          ]
        },
      ]
    },
  ]
}
