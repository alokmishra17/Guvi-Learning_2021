1. For Read:

a. Statically Typed & Dynamically typed Language

-->
A language is statically typed if the type of a variable is known at compile time. 
For some languages this means that you as the programmer must specify what type each variable.
The main advantage here is that all kinds of checking can be done by the compiler, and therefore a lot of trivial bugs are caught at a very early stage.
In simple statically typed language variables' types are static, meaning once you set a variable to a type, you cannot change it. That is because typing is associated with the variable rather than the value it refers to.

Examples: C, C++, Java, Rust, Go, Scala


A language is dynamically typed if the type is associated with run-time values, and not named variables/fields/etc.
This means that you as a programmer can write a little quicker because you do not have to specify types every time.
Dynamically typed programming languages do type checking at run-time as opposed to compile-time.
In dynamically typed language variables' types are dynamic, meaning after you set a variable to a type, you CAN change it. 
That is because typing is associated with the value it assumes rather than the variable itself.

Examples of dynamically typed languages are :- Perl, Ruby, Python, PHP, JavaScript.


------------------------------------------------------------------------------------------------------------
b. Scripting Language vs Programming Language

-->
Scripting languages are programming languages that don't require an explicit compilation step.
A scripting language usually isnt compiled so can run as soon as you write something meaningful.
Scripting languages are usually slower than programming languages.
A scripting language usually sits behind some programming language. Scripting languages usually have less access to the computers native abilities since they run on a subset of the original programming language.
Programming Language is compiled to machine code and run on the hardware of the underlying Operating System.

The actual difference is the target of the code written. Who is going to run this code.
A scripting language is used to write code that is going to target a software system. It's going to automate operations on that software system.
The script is going to be a sequence of instructions to the target software system.
A programming language targets the computing system, which can be a real or virtual machine. The instructions are executed by the machine.

-----------------------------------------------------------------------------------------------------------------
3. Difference between http1.1 vs http2


HTTP is based on the Client/Server model. Client/Server model can be explained as two computers, Client (receiver of service) and Server (provider of service) that are communicating via requests and responses.

HTTP 1.1
Developed by Timothy Berners-Lee in 1989 as a communication standard for the World Wide Web
HTTP is a top-level application protocol that exchanges information between a client computer and a local or remote web server.
HTTP/1.1 was the third version of HTTP and the standard protocol for over 15 years. 
It introduced persistent connections for improved performance and laid the foundation for standard requests, such as GET, HEAD, PUT, and POST.
As websites became more resource-intensive, however, HTTP/1.1’s limitations began to show. 
Specifically, its use of one outstanding request per TCP connection created significant overhead, slowing down page load times.

HTTP 2
While HTTP/2 was initially modeled after SPDY, it was soon modified to include unique features, including a fixed header compression algorithm, (in contrast to SPDY’s dynamic stream-based compression). 
HTTP/2 was released in 2015 as a major revision to the HTTP/1.1 protocol.
It was derived from the SPDY protocol as a way to improve the online experience by speeding up page loads and reducing round-trip time (RTT), especially on resource-heavy web pages.
HTTP/2 improved on HTTP/1.1 in a number of ways that allowed for speedier content delivery and improved user experience, including:
--Binary protocols
--Multiplexing 
--Header compression
--Server push
--Increased security

---------------------------------------------------------------------------------------------------------------------- 
