import{_ as l,c as i,o as e,d as a}from"./app.c282a12f.js";const g=JSON.parse('{"title":"多线程","description":"","frontmatter":{},"headers":[{"level":2,"title":"01-创建线程有哪几种方式？","slug":"_01-创建线程有哪几种方式","link":"#_01-创建线程有哪几种方式","children":[]},{"level":2,"title":"02-说说Thread类的常用方法","slug":"_02-说说thread类的常用方法","link":"#_02-说说thread类的常用方法","children":[]},{"level":2,"title":"03-run()和start()有什么区别？","slug":"_03-run-和start-有什么区别","link":"#_03-run-和start-有什么区别","children":[]},{"level":2,"title":"04-如何实现线程同步？","slug":"_04-如何实现线程同步","link":"#_04-如何实现线程同步","children":[]},{"level":2,"title":"05-说一说Java多线程之间的通信方式","slug":"_05-说一说java多线程之间的通信方式","link":"#_05-说一说java多线程之间的通信方式","children":[]},{"level":2,"title":"06-说一说sleep()和wait()的区别","slug":"_06-说一说sleep-和wait-的区别","link":"#_06-说一说sleep-和wait-的区别","children":[]},{"level":2,"title":"07-说一说notify()、notifyAll()的区别","slug":"_07-说一说notify-、notifyall-的区别","link":"#_07-说一说notify-、notifyall-的区别","children":[]},{"level":2,"title":"08-阻塞线程的方式有哪些？","slug":"_08-阻塞线程的方式有哪些","link":"#_08-阻塞线程的方式有哪些","children":[]},{"level":2,"title":"09-说一说synchronized与Lock的区别","slug":"_09-说一说synchronized与lock的区别","link":"#_09-说一说synchronized与lock的区别","children":[]},{"level":2,"title":"10-synchronized可以修饰静态方法和静态代码块吗？","slug":"_10-synchronized可以修饰静态方法和静态代码块吗","link":"#_10-synchronized可以修饰静态方法和静态代码块吗","children":[]},{"level":2,"title":"11-说说你对读写锁的了解","slug":"_11-说说你对读写锁的了解","link":"#_11-说说你对读写锁的了解","children":[]},{"level":2,"title":"12-谈谈volatile的实现原理","slug":"_12-谈谈volatile的实现原理","link":"#_12-谈谈volatile的实现原理","children":[]}],"relativePath":"Java/interview_java/Java基础/多线程.md"}'),n={name:"Java/interview_java/Java基础/多线程.md"},t=a('<h1 id="多线程" tabindex="-1">多线程 <a class="header-anchor" href="#多线程" aria-hidden="true">#</a></h1><h2 id="_01-创建线程有哪几种方式" tabindex="-1">01-创建线程有哪几种方式？ <a class="header-anchor" href="#_01-创建线程有哪几种方式" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><p>创建线程有三种方式，分别是继承Thread类、实现Runnable接口、实现Callable接口。</p><p>通过继承Thread类来创建并启动线程的步骤如下：</p><ol><li>定义Thread类的子类，并重写该类的run()方法，该run()方法将作为线程执行体。</li><li>创建Thread子类的实例，即创建了线程对象。</li><li>调用线程对象的start()方法来启动该线程。</li></ol><p>通过实现Runnable接口来创建并启动线程的步骤如下：</p><ol><li>定义Runnable接口的实现类，并实现该接口的run()方法，该run()方法将作为线程执行体。</li><li>创建Runnable实现类的实例，并将其作为Thread的target来创建Thread对象，Thread对象为线程对象。</li><li>调用线程对象的start()方法来启动该线程。</li></ol><p>通过实现Callable接口来创建并启动线程的步骤如下：</p><ol><li>创建Callable接口的实现类，并实现call()方法，该call()方法将作为线程执行体，且该call()方法有返回值。然后再创建Callable实现类的实例。</li><li>使用FutureTask类来包装Callable对象，该FutureTask对象封装了该Callable对象的call()方法的返回值。</li><li>使用FutureTask对象作为Thread对象的target创建并启动新线程。</li><li>调用FutureTask对象的get()方法来获得子线程执行结束后的返回值。</li></ol><h2 id="_02-说说thread类的常用方法" tabindex="-1">02-说说Thread类的常用方法 <a class="header-anchor" href="#_02-说说thread类的常用方法" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><p>Thread类常用构造方法：</p><ul><li>Thread()</li><li>Thread(String name)</li><li>Thread(Runnable target)</li><li>Thread(Runnable target, String name)</li></ul><p><em>其中，参数 name为线程名，参数 target为包含线程体的目标对象。</em></p><p>Thread类常用静态方法：</p><ul><li>currentThread()：返回当前正在执行的线程；</li><li>interrupted()：返回当前执行的线程是否已经被中断；</li><li>sleep(long millis)：使当前执行的线程睡眠多少毫秒数；</li><li>yield()：使当前执行的线程自愿暂时放弃对处理器的使用权并允许其他线程执行；</li></ul><p>Thread类常用实例方法：</p><ul><li>getId()：返回该线程的id；</li><li>getName()：返回该线程的名字；</li><li>getPriority()：返回该线程的优先级；</li><li>interrupt()：使该线程中断；</li><li>isInterrupted()：返回该线程是否被中断；</li><li>isAlive()：返回该线程是否处于活动状态；</li><li>isDaemon()：返回该线程是否是守护线程；</li><li>setDaemon(boolean on)：将该线程标记为守护线程或用户线程，如果不标记默认是非守护线程；</li><li>setName(String name)：设置该线程的名字；</li><li>setPriority(int newPriority)：改变该线程的优先级；</li><li>join()：等待该线程终止；</li><li>join(long millis)：等待该线程终止,至多等待多少毫秒数。</li></ul><h2 id="_03-run-和start-有什么区别" tabindex="-1">03-run()和start()有什么区别？ <a class="header-anchor" href="#_03-run-和start-有什么区别" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><p>run()方法被称为线程执行体，它的方法体代表了线程需要完成的任务，而start()方法用来启动线程。</p><p>调用start()方法启动线程时，系统会把该run()方法当成线程执行体来处理。但如果直接调用线程对象的run()方法，则run()方法立即就会被执行，而且在run()方法返回之前其他线程无法并发执行。也就是说，如果直接调用线程对象的run()方法，系统把线程对象当成一个普通对象，而run()方法也是一个普通方法，而不是线程执行体。</p><h2 id="_04-如何实现线程同步" tabindex="-1">04-如何实现线程同步？ <a class="header-anchor" href="#_04-如何实现线程同步" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><ol><li><p>同步方法</p><p>即有synchronized关键字修饰的方法，由于java的每个对象都有一个内置锁，当用此关键字修饰方法时， 内置锁会保护整个方法。在调用该方法前，需要获得内置锁，否则就处于阻塞状态。需要注意， synchronized关键字也可以修饰静态方法，此时如果调用该静态方法，将会锁住整个类。</p></li><li><p>同步代码块</p><p>即有synchronized关键字修饰的语句块，被该关键字修饰的语句块会自动被加上内置锁，从而实现同步。需值得注意的是，同步是一种高开销的操作，因此应该尽量减少同步的内容。通常没有必要同步整个方法，使用synchronized代码块同步关键代码即可。</p></li><li><p>ReentrantLock</p><p>Java 5新增了一个java.util.concurrent包来支持同步，其中ReentrantLock类是可重入、互斥、实现了Lock接口的锁，它与使用synchronized方法和快具有相同的基本行为和语义，并且扩展了其能力。需要注意的是，ReentrantLock还有一个可以创建公平锁的构造方法，但由于能大幅度降低程序运行效率，因此不推荐使用。</p></li><li><p>volatile</p><p>volatile关键字为域变量的访问提供了一种免锁机制，使用volatile修饰域相当于告诉虚拟机该域可能会被其他线程更新，因此每次使用该域就要重新计算，而不是使用寄存器中的值。需要注意的是，volatile不会提供任何原子操作，它也不能用来修饰final类型的变量。</p></li><li><p>原子变量</p><p>在java的util.concurrent.atomic包中提供了创建了原子类型变量的工具类，使用该类可以简化线程同步。例如AtomicInteger 表可以用原子方式更新int的值，可用在应用程序中（如以原子方式增加的计数器），但不能用于替换Integer。可扩展Number，允许那些处理机遇数字类的工具和实用工具进行统一访问。</p></li></ol><h2 id="_05-说一说java多线程之间的通信方式" tabindex="-1">05-说一说Java多线程之间的通信方式 <a class="header-anchor" href="#_05-说一说java多线程之间的通信方式" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><p>在Java中线程通信主要有以下三种方式：</p><ol><li><p>wait()、notify()、notifyAll()</p><p>如果线程之间采用synchronized来保证线程安全，则可以利用wait()、notify()、notifyAll()来实现线程通信。这三个方法都不是Thread类中所声明的方法，而是Object类中声明的方法。原因是每个对象都拥有锁，所以让当前线程等待某个对象的锁，当然应该通过这个对象来操作。并且因为当前线程可能会等待多个线程的锁，如果通过线程来操作，就非常复杂了。另外，这三个方法都是本地方法，并且被final修饰，无法被重写。</p><p>wait()方法可以让当前线程释放对象锁并进入阻塞状态。notify()方法用于唤醒一个正在等待相应对象锁的线程，使其进入就绪队列，以便在当前线程释放锁后竞争锁，进而得到CPU的执行。notifyAll()用于唤醒所有正在等待相应对象锁的线程，使它们进入就绪队列，以便在当前线程释放锁后竞争锁，进而得到CPU的执行。</p><p>每个锁对象都有两个队列，一个是就绪队列，一个是阻塞队列。就绪队列存储了已就绪（将要竞争锁）的线程，阻塞队列存储了被阻塞的线程。当一个阻塞线程被唤醒后，才会进入就绪队列，进而等待CPU的调度。反之，当一个线程被wait后，就会进入阻塞队列，等待被唤醒。</p></li><li><p>await()、signal()、signalAll()</p><p>如果线程之间采用Lock来保证线程安全，则可以利用await()、signal()、signalAll()来实现线程通信。这三个方法都是Condition接口中的方法，该接口是在Java 1.5中出现的，它用来替代传统的wait+notify实现线程间的协作，它的使用依赖于 Lock。相比使用wait+notify，使用Condition的await+signal这种方式能够更加安全和高效地实现线程间协作。</p><p>Condition依赖于Lock接口，生成一个Condition的基本代码是lock.newCondition() 。 必须要注意的是，Condition 的 await()/signal()/signalAll() 使用都必须在lock保护之内，也就是说，必须在lock.lock()和lock.unlock之间才可以使用。事实上，await()/signal()/signalAll() 与 wait()/notify()/notifyAll()有着天然的对应关系。即：Conditon中的await()对应Object的wait()，Condition中的signal()对应Object的notify()，Condition中的signalAll()对应Object的notifyAll()。</p></li><li><p>BlockingQueue</p><p>Java 5提供了一个BlockingQueue接口，虽然BlockingQueue也是Queue的子接口，但它的主要用途并不是作为容器，而是作为线程通信的工具。BlockingQueue具有一个特征：当生产者线程试图向BlockingQueue中放入元素时，如果该队列已满，则该线程被阻塞；当消费者线程试图从BlockingQueue中取出元素时，如果该队列已空，则该线程被阻塞。</p><p>程序的两个线程通过交替向BlockingQueue中放入元素、取出元素，即可很好地控制线程的通信。线程之间需要通信，最经典的场景就是生产者与消费者模型，而BlockingQueue就是针对该模型提供的解决方案。</p></li></ol><h2 id="_06-说一说sleep-和wait-的区别" tabindex="-1">06-说一说sleep()和wait()的区别 <a class="header-anchor" href="#_06-说一说sleep-和wait-的区别" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><ol><li>sleep()是Thread类中的静态方法，而wait()是Object类中的成员方法；</li><li>sleep()可以在任何地方使用，而wait()只能在同步方法或同步代码块中使用；</li><li>sleep()不会释放锁，而wait()会释放锁，并需要通过notify()/notifyAll()重新获取锁。</li></ol><h2 id="_07-说一说notify-、notifyall-的区别" tabindex="-1">07-说一说notify()、notifyAll()的区别 <a class="header-anchor" href="#_07-说一说notify-、notifyall-的区别" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><ul><li><p>notify()</p><p>用于唤醒一个正在等待相应对象锁的线程，使其进入就绪队列，以便在当前线程释放锁后竞争锁，进而得到CPU的执行。</p></li><li><p>notifyAll()</p><p>用于唤醒所有正在等待相应对象锁的线程，使它们进入就绪队列，以便在当前线程释放锁后竞争锁，进而得到CPU的执行。</p></li></ul><h2 id="_08-阻塞线程的方式有哪些" tabindex="-1">08-阻塞线程的方式有哪些？ <a class="header-anchor" href="#_08-阻塞线程的方式有哪些" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><p>当发生如下情况时，线程将会进入阻塞状态：</p><ul><li>线程调用sleep()方法主动放弃所占用的处理器资源；</li><li>线程调用了一个阻塞式IO方法，在该方法返回之前，该线程被阻塞；</li><li>线程试图获得一个同步监视器，但该同步监视器正被其他线程所持有；</li><li>线程在等待某个通知（notify）；</li><li>程序调用了线程的suspend()方法将该线程挂起，但这个方法容易导致死锁，所以应该尽量避免使用该方法。</li></ul><h2 id="_09-说一说synchronized与lock的区别" tabindex="-1">09-说一说synchronized与Lock的区别 <a class="header-anchor" href="#_09-说一说synchronized与lock的区别" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><ol><li>synchronized是Java关键字，在JVM层面实现加锁和解锁；Lock是一个接口，在代码层面实现加锁和解锁。</li><li>synchronized可以用在代码块上、方法上；Lock只能写在代码里。</li><li>synchronized在代码执行完或出现异常时自动释放锁；Lock不会自动释放锁，需要在finally中显示释放锁。</li><li>synchronized会导致线程拿不到锁一直等待；Lock可以设置获取锁失败的超时时间。</li><li>synchronized无法得知是否获取锁成功；Lock则可以通过tryLock得知加锁是否成功。</li><li>synchronized锁可重入、不可中断、非公平；Lock锁可重入、可中断、可公平/不公平，并可以细分读写锁以提高效率。</li></ol><h2 id="_10-synchronized可以修饰静态方法和静态代码块吗" tabindex="-1">10-synchronized可以修饰静态方法和静态代码块吗？ <a class="header-anchor" href="#_10-synchronized可以修饰静态方法和静态代码块吗" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><p>synchronized可以修饰静态方法，但不能修饰静态代码块。</p><p>当修饰静态方法时，监视器锁（monitor）便是对象的Class实例，因为Class数据存在于永久代，因此静态方法锁相当于该类的一个全局锁。</p><h2 id="_11-说说你对读写锁的了解" tabindex="-1">11-说说你对读写锁的了解 <a class="header-anchor" href="#_11-说说你对读写锁的了解" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><p>与传统锁不同的是读写锁的规则是可以共享读，但只能一个写，总结起来为：读读不互斥、读写互斥、写写互斥，而一般的独占锁是：读读互斥、读写互斥、写写互斥，而场景中往往读远远大于写，读写锁就是为了这种优化而创建出来的一种机制。 注意是读远远大于写，一般情况下独占锁的效率低来源于高并发下对临界区的激烈竞争导致线程上下文切换。因此当并发不是很高的情况下，读写锁由于需要额外维护读锁的状态，可能还不如独占锁的效率高。因此需要根据实际情况选择使用。</p><p>在Java中ReadWriteLock的主要实现为ReentrantReadWriteLock，其提供了以下特性：</p><ol><li>公平性选择：支持公平与非公平（默认）的锁获取方式，吞吐量非公平优先于公平。</li><li>可重入：读线程获取读锁之后可以再次获取读锁，写线程获取写锁之后可以再次获取写锁。</li><li>可降级：写线程获取写锁之后，其还可以再次获取读锁，然后释放掉写锁，那么此时该线程是读锁状态，也就是降级操作。</li></ol><h2 id="_12-谈谈volatile的实现原理" tabindex="-1">12-谈谈volatile的实现原理 <a class="header-anchor" href="#_12-谈谈volatile的实现原理" aria-hidden="true">#</a></h2><p><strong>参考答案</strong></p><p>volatile可以保证线程可见性且提供了一定的有序性，但是无法保证原子性。在JVM底层volatile是采用“内存屏障”来实现的。观察加入volatile关键字和没有加入volatile关键字时所生成的汇编代码发现，加入volatile关键字时，会多出一个lock前缀指令，lock前缀指令实际上相当于一个内存屏障，内存屏障会提供3个功能：</p><ol><li>它确保指令重排序时不会把其后面的指令排到内存屏障之前的位置，也不会把前面的指令排到内存屏障的后面；即在执行到内存屏障这句指令时，在它前面的操作已经全部完成；</li><li>它会强制将对缓存的修改操作立即写入主存；</li><li>如果是写操作，它会导致其他CPU中对应的缓存行无效。</li></ol>',56),r=[t];function o(s,d,h,c,p,u){return e(),i("div",null,r)}const y=l(n,[["render",o]]);export{g as __pageData,y as default};
