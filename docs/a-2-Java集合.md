# Java集合

## 1、集合的种类有哪些？

集合类存放于 Java.util 包中

种类：**①List(列表包含 Queue) ②set(集) ③map(映射)**

**Colection接口**

| 方法                            | 功能描述                           |
| ------------------------------- | ---------------------------------- |
| boolean add(Object o)           | 向集合中添加一个元素               |
| boolean addAll(Collection c)    | 将Collection中的所有元素添加到集合 |
| void clear()                    | 清空集合，删除集合中的所有元素     |
| boolean remove(Object o)        | 删除集合中的指定元素               |
| boolean removeAll(Collection c) | 删除指定集合中所有元素             |
| boolean isEmpty()               | 判断集合是否为空                   |
| int Size()                      | 获取集合中元素的个数               |
| boolean contains(Object o)      | 判断集合中是否包含某元素           |

**List接口的方法（重点）**

| 方法                                      | 功能描述                                                   |
| ----------------------------------------- | ---------------------------------------------------------- |
| void add(int index,Object e)              | 将元素e插入到index处                                       |
| remove(int index)                         | 删除index索引处的元素                                      |
| get(int index)                            | 返回至index索引处的元素                                    |
| int indexOf(Object o)                     | 返回对象o的索引位置                                        |
| int lastIndexOf(Object o)                 | 返回对象o的最后一次出现的索引位置                          |
| set(int index,Object e)                   | 将index处的元素替换为元素e                                 |
| List subList(int fromIndex, int toIndex); | 返回由索引fromIndex（包括）到toIndex（不包括）处的所有元素 |

**LinkedList的方法**

| 方法                 | 功能描述          |
| -------------------- | ----------------- |
| Object getFirst()    | 获取第一个元素    |
| Object getLast()     | 获取最后一个元素  |
| Object removeFirst() | 移出第一个元素    |
| Object removeLast()  | 移出最后一个元素  |
| void addFirst(E e)   | 将元素e添加到开头 |
| void addLast(E e)    | 将元素e添加到最后 |

**Map接口**

| 方法                                | 功能描述                                         |
| ----------------------------------- | ------------------------------------------------ |
| void put(Object key,Object value)   | 将指定值与指定键进行关联映射                     |
| Object get(Object key)              | 返回key值对应的value                             |
| boolean containsKey(Object key)     | 集合中是否存在指定key，是则返回true，否则false   |
| boolean containsValue(Object value) | 集合中是否存在指定value，是则返回true，否则false |

## 2、各集合之间的区别及特点？

- **List：有序的Collection，可重复**
  - ArrayList：①排列有序，可重复②底层使用数组实现③查询速度快，增删慢，getter() / setter()④线程不安全⑤当容量不够时，当前容量 * 1.5
  - Vector：①排列有序，可重复②底层使用数组实现③查询速度快，增删慢④线程安全，效率低⑤当容量不够时，当前容量 * 2
  - LinkedList：①排列有序，可重复②底层使用双向循环链表结构实现③查询速度慢，增删快，add() / remove()④线程不安全

- **Set：无序的Collection，不可重复**
  - HashSet：①排列无序，不可重复②底层使用Hash表实现③存取速度快④内部是HashMap
  - TreeSet：①排列无序，不可重复②底层使用二叉树实现③排序存储④内部是TreeMap的SortedSet
  - LinkedHashSet：①采用Hash表存储，并用双向链表记录插入顺序②内部是LinkedHashMap
  - Queue：①在两端出入的List，所以也可以用数组或链表实现

- **Map：**
  - HashMap：①键不可重复，值可重复②底层数组 + 链表 + 红黑树③线程不安全④允许key为null，value为null
    补充：内部变量介绍
    ①**capacity：当前数组容量**，始终保持 2^n，可以扩容，扩容后数组大小为当前的 2 倍。
    ②**loadFactor：负载因子**，默认为 0.75。
    如果负载因子过小，虽然时间效率会有所提升，但是空间利用率也会大大降低
    负载因子为0.75的时候，空间利用率比较高，而且避免了相当多的Hash冲突，使得底层的链表或者是红黑树的高度比较低，提升了空间效率
    ③**threshold：扩容的阈值**，等于 capacity * loadFactor
    JAVA7  实现：查询时需要顺着链表一个个往下比较才能找到，时间复杂度取决于链表的长度，为 O(n)
    JAVA8  实现：当链表中的元素超过了 8 个以后，会将链表转换为红黑树，时间复杂度降低为 O(logN)
  - ConcurrentHashMap：①线程安全②支持并发操作，所以要复杂一些
    原理：ConcurrentHashMap 是一个 Segment 数组，Segment 通过继承ReentrantLock 来进行加锁，所以每次需要加锁的操作锁住的是一个 segment，这样只要保证每个 Segment 是线程安全的
    concurrencyLevel：并行度(默认 16)，默认是 16，所以理论上，最多可以同时支持 16 个线程并发写，该值可以在初始化的时候设置为其他值，但是一旦初始化以后，它就不可以扩容，Java8 实现(引入了红黑树)
  - Hashtable (不建议使用)：①键不可重复，值可重复②底层Hash③线程安全④key、value都不允许为null
    原理：与 HashMap 类似，但承自 Dictionary 类，并且是线程安全的，但并发性没有ConcurrentHashMap高，因为 ConcurrentHashMap 引入了分段锁
    不要求线程安全，使用HashMap
    要求线程安全：ConcurrentHashMap		
  - TreeMap：①键不可重复，值可重复②底层二叉树
    补充：实现 SortedMap 接口，默认是按键值的升序排序，也可以指定排序的比较器，当用 Iterator 遍历 TreeMap 时，得到的记录是排过序的，如果使用排序的映射，建议使用 TreeMap
    注意：在使用 TreeMap 时，key 必须实现 Comparable 接口或者在构造 TreeMap 传入自定义的Comparator，否则会在运行时抛出 java.lang.ClassCastException

# ———————————————

## 3、ArrayList 和 LinkedList 区别?

- ArrayList 和 LinkedList 都是不同步的，也就是不保证线程安全；
- ArrayList 底层使用的是 Object 数组，LinkedList 底层使用的是双向链表数据结构
- ① ArrayList 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。
  ② LinkedLis 采用链表存储，所以对于add(E e)方法的插入，删除元素时间复杂度不受元素位置的影响，近似 O（1），如果是要在指定位置 i 插入和删除元素的话（(add(int index, E element)） 时间复杂度近似为o(n))，因为需要先移动到指定位置再插入。
- LinkedList  不支持高效的随机元素访问，而  ArrayList  支持。
  补充：快速随机访问就是通过元素的序号快速获取元素对象(对应于 get(int index)  方法)。
- 5. 内存空间占用：ArrayList的空间浪费主要体现在在list列表的结尾会预留一定的容量空间，而LinkedList的空间花费则体现在它的每一个元素都需要消耗比ArrayList更多的空间（因为要存放直接后继和直接前驱以及数据）。

List 的遍历方式：
①实现了  RandomAccess  接口的  ArrayList   ，优先选择普通 for 循环 ，其次 foreach,
②未实现  RandomAccess 接口的  LinkedList   ，优先选择iterator遍历（foreach遍历底层也是通过iterator实现的），大size的数据，千万不要使用普通for循环

### 2.2.3 ArrayList 与 Vector 区别呢?

- Vector
  - 类的**所有方法都是同步**的。可以由**两个线程安全地**访问一个Vector对象
  - 但是**一个线程**访问Vector的话代码要在同步操作上**耗费大量的时间**。
- Arraylist
  - 类的**所有方法都是不同步**的，所以在不需要保证线程安全时建议使用Arraylist。

### 2.2.4 说一说 ArrayList 的扩容机制

 **简单的说ArrayList扩容的本质就是计算出新的扩容数组的size后实例化，并将原有数组内容复制到新数组中去。** 

### 2.2.5 HashMap 和 Hashtable 的区别

1. **线程是否安全：** 
   - HashMap 是非线程安全的，HashTable 是线程安全的；
   - HashTable 内部的方法基本都经过 synchronized  修饰。（如果你要保证线程安全的话就使用 ConcurrentHashMap 吧！）；
2. **效率：** 
   - 因为线程安全的问题，HashMap 要比 HashTable 效率高一点。
   - 另外，HashTable 基本被淘汰，不要在代码中使用它；
3. **对Null key 和Null value的支持：** 
   - HashMap 中，null 可以作为键，这样的键只有一个，可以有一个或多个键所对应的值为 null。
   - 但是在 HashTable 中 put 进的键值只要有一个 null，直接抛出 NullPointerException。
4. **初始容量大小和每次扩充容量大小的不同 ：** 
   - ①
     - 创建时如果不指定容量初始值，Hashtable 默认的初始大小为11，之后每次扩充，容量变为原来的2n+1。
     - HashMap 默认的初始化大小为16。之后每次扩充，容量变为原来的2倍。
   - ②
     - 创建时如果给定了容量初始值，那么 Hashtable 会直接使用你给定的大小，
     - 而 HashMap 会将其扩充为2的幂次方大小（HashMap 中的 tableSizeFor() 方法保证，下面给出了源代码）。也就是说 HashMap 总是使用2的幂作为哈希表的大小,后面会介绍到为什么是2的幂次方。
5. **底层数据结构：**
   - 当链表长度大于阈值（默认为8）时，将链表转化为红黑树，以减少搜索时间。
   - Hashtable 没有这样的机制。

### 2.2.6 HashMap 和 HashSet区别

如果你看过  HashSet  源码的话就应该知道：HashSet 底层就是基于 HashMap 实现的。（HashSet 的源码非常非常少，因为除了  clone()  、 writeObject() 、 readObject() 是 HashSet 自己不得不实现之外，其他方法都是直接调用 HashMap 中的方法。

| HashSet                                                      | HashMap                          |
| ------------------------------------------------------------ | -------------------------------- |
| 实现Set接口                                                  | 实现了Map接口                    |
| 仅存储对象                                                   | 存储键值对                       |
| 调用  add（） 方法向Set中添加元素                            | 调用  put（） 向map中添加元素    |
| HashSet使用成员对象来计算hashcode值，对于两个对象来说hashcode可能相同，所以equals()方法用来判断对象的相等性， | HashMap使用键（Key）计算Hashcode |

### 2.2.7 HashSet如何检查重复

1. 先计算对象的 hashcode 值来判断对象加入的位置
2. 接着与其他加入的对象的hashcode值作比较
3. 没有相符的hashcode，HashSet会假设对象没有重复出现，添加成功
4. 发现有相同hashcode值的对象，这时会调用 equals（） 方法来检查hashcode相等的对象是否真的相同
5. 如果两者相同，HashSet就不会让加入操作成功，若不相等，则添加成功

**hashCode（）与equals（）的相关规定：**

1. 如果两个对象相等，则hashcode一定也是相同的
2. 两个对象相等,对两个equals方法返回true
3. 两个对象有相同的hashcode值，它们也不一定是相等的
4. 综上，equals方法被覆盖过，则hashCode方法也必须被覆盖
5. hashCode()的默认行为是对堆上的对象产生独特值。如果没有重写hashCode()，则该class的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）。

### 2.2.8 HashMap的底层实现

- #### JDK1.8之前

  - **数组 + 链表** 结合在一起使用也就是 **链表散列**。**HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash 值，然后通过 (n - 1) & hash 判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。**
  - **所谓扰动函数指的就是 HashMap 的 hash 方法。使用 hash 方法也就是扰动函数是为了防止一些实现比较差的 hashCode() 方法 换句话说使用扰动函数之后可以减少碰撞。**

- #### JDK1.8之

  - **数组 + 链表/红黑树**在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为8）时，将链表转化为红黑树，以减少搜索时间。

### 2.2.9 HashMap 的长度为什么是2的幂次方

为了能让 HashMap 存取高效，尽量较少碰撞，也就是要尽量把数据分配均匀。我们上面也讲到了过了，Hash 值的范围值-2147483648到2147483647，前后加起来大概40亿的映射空间，只要哈希函数映射得比较均匀松散，一般应用是很难出现碰撞的。但问题是一个40亿长度的数组，内存是放不下的。所以这个散列值是不能直接拿来用的。用之前还要先做对数组的长度取模运算，得到的余数才能用来要存放的位置也就是对应的数组下标。这个数组下标的计算方法是“  (n - 1) & hash ”。（n代表数组长度）。这也就解释了 HashMap 的长度为什么是2的幂次方。

**这个算法应该如何设计呢？**

我们首先可能会想到采用%取余的操作来实现。但是，重点来了：**“取余(%)操作中如果除数是2的幂次则等价于与其除数减一的与(&)操作（也就是说 hash%length==hash&(length-1)的前提是 length 是2的 n 次方；）。”** 并且 **采用二进制位操作 &，相对于%能够提高运算效率，这就解释了 HashMap 的长度为什么是2的幂次方。**

### 2.2.10 HashMap 多线程操作导致死循环问题

主要原因在于 并发下的Rehash 会造成元素之间会形成一个循环链表。不过，jdk 1.8 后解决了这个问题，但是还是不建议在多线程下使用 HashMap,因为多线程下使用 HashMap 还是会存在其他问题比如数据丢失。并发环境下推荐使用 ConcurrentHashMap 。

### 2.2.11 ConcurrentHashMap 和 Hashtable 的区别

ConcurrentHashMap 和 Hashtable 的区别主要体现在**实现线程安全的方式上不同。**

- **底层数据结构：**
  - ConcurrentHashMap ：**分段锁**
    -  JDK1.7的 ConcurrentHashMap 底层采用 **分段的数组+链表** 实现，
    -  JDK1.8 采用的数据结构跟HashMap1.8的结构一样，数组+链表/红黑二叉树。
  - Hashtable ：**全表锁**
    - Hashtable 和 JDK1.8 之前的 HashMap 的底层数据结构类似都是采用 **数组+链表** 的形式，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的；
- **实现线程安全的方式（重要）：** 
  - ① 
    - **在JDK1.7的时候，ConcurrentHashMap（分段锁）** 对整个桶数组进行了分割分段(Segment)，每一把锁只锁容器其中一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。 **到了 JDK1.8 的时候已经摒弃了Segment的概念，而是直接用 Node 数组+链表+红黑树的数据结构来实现，并发控制使用 synchronized 和 CAS 来操作。（JDK1.6以后 对 synchronized锁做了很多优化）** 整个看起来就像是优化过且线程安全的 HashMap，虽然在JDK1.8中还能看到 Segment 的数据结构，但是已经简化了属性，只是为了兼容旧版本；
  - ②
    -  **Hashtable(同一把锁)** :使用 synchronized 来保证线程安全，效率非常低下。当一个线程访问同步方法时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用 put 添加元素，另一个线程不能使用 put 添加元素，也不能使用 get，竞争会越来越激烈效率越低。

### 2.2.12 ConcurrentHashMap线程安全的具体实现方式/底层具体实现

#### **jdk1.7 ：**

首先将数据分为一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问。

**ConcurrentHashMap 是由 Segment 数组结构和 HashEntry 数组结构组成**。

Segment 实现了 ReentrantLock,所以 Segment 是一种可重入锁，扮演锁的角色。HashEntry 用于存储键值对数据。

 一个 ConcurrentHashMap 里包含一个 Segment 数组。Segment 的结构和HashMap类似，是一种数组和链表结构，一个 Segment 包含一个 HashEntry 数组，每个 HashEntry 是一个链表结构的元素，每个 Segment 守护着一个HashEntry数组里的元素，当对 HashEntry 数组的数据进行修改时，必须首先获得对应的 Segment的锁。 

#### **jdk1.8 ：**

ConcurrentHashMap取消了Segment分段锁，采用CAS和synchronized来保证并发安全。数据结构跟HashMap1.8的结构类似，数组+链表/红黑二叉树。Java 8在链表长度超过一定阈值（8）时将链表（寻址时间复杂度为O(N)）转换为红黑树（寻址时间复杂度为O(log(N))）	

synchronized只锁定当前链表或红黑二叉树的首节点，这样只要hash不冲突，就不会产生并发，效率又提升N倍。

### 2.2.13 comparable 和 Comparator的区别

- comparable接口实际上是出自java.lang包 它有一个  compareTo(Object obj) 方法用来排序
- comparator接口实际上是出自 java.util 包它有一个 compare(Object obj1, Object obj2) 方法用来排序

一般我们需要对一个集合使用自定义排序时，我们就要重写 compareTo() 方法或 compare() 方法，当我们需要对某一个集合实现两种排序方式，比如一个song对象中的歌名和歌手名分别采用一种排序方法的话，我们可以重写 compareTo() 方法和使用自制的Comparator方法或者以两个Comparator来实现歌名排序和歌星名排序，第二种代表我们只能使用两个参数版的  Collections.sort() .

### 2.2.14 集合框架底层数据结构总结

#### Collection

- **List**
  - **Arraylist：** 底层Object数组实现
  - **Vector：** 底层Object数组实现
  - **LinkedList：** 双向链表(JDK1.6之前为循环链表，JDK1.7取消了循环)
- **Set**
  - **HashSet（无序，唯一）:** 基于 HashMap 实现的，底层采用 HashMap 来保存元素
  - **LinkedHashSet：** LinkedHashSet 继承于 HashSet，并且其内部是通过 LinkedHashMap 来实现的。有点类似于我们之前说的LinkedHashMap 其内部是基于 HashMap 实现一样，不过还是有一点点区别的
  - **TreeSet（有序，唯一）：** 红黑树(自平衡的排序二叉树)

#### Map

- **HashMap：** 
  - JDK1.8之前HashMap由数组+链表组成的，数组是HashMap的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。
  - JDK1.8以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为8）时，将链表转化为红黑树，以减少搜索时间
- **LinkedHashMap：** 
  - LinkedHashMap 继承自 HashMap，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。
  - 另外，LinkedHashMap 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。
- **Hashtable：** 数组+链表组成的，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的
- **TreeMap：** 红黑树（自平衡的排序二叉树）

### 2.2.15 如何选用集合?

- **根据键值获取到元素值：**选择Map接口下的集合
  - **是否需要排序：**
    - 需要排序TreeMap
    - 不需要排序HashMap
  - **是否需要保证线程安全：**
    - 需要就选用ConcurrentHashMap
- **只需要存放元素值：**选择Collection接口的集合
  - **需要保证元素唯一：**选择Set接口的集合
    - TreeSet
    - HashSet
  - **不需要保证元素唯一：** 选择List接口的集合
    - ArrayList
    - LinkedList