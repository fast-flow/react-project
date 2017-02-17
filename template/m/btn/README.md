# btn

````html
<link rel="stylesheet" href="./index.less">
````

## a/span/button
````html
<a href="#" class="m-btn">a.m-btn</a>
<span href="#" class="m-btn">span.m-btn</span>
<button type="button" href="#" class="m-btn">button.m-btn</button>
````

## disabled

````html
<span class="m-btn m-btn--disabled" disabled="disabled">m-btn--disabled</span>
````

## color

````html
<span class="m-btn m-btn--link" >m-btn--link</span>
<span class="m-btn m-btn--text" >m-btn--text</span>
<span class="m-btn" >default</span>
````
````html
<span class="m-btn m-btn--primary" >m-btn--primary</span>
<span class="m-btn m-btn--success" >m-btn--success</span>
<span class="m-btn m-btn--info" >m-btn--info</span>
<span class="m-btn m-btn--warning" >m-btn--warning</span>
<span class="m-btn m-btn--danger" >m-btn--danger</span>
````
````html
<span class="m-btn m-btn--primary2" >m-btn--primary2</span>
<span class="m-btn m-btn--success2" >m-btn--success2</span>
<span class="m-btn m-btn--info2" >m-btn--info2</span>
<span class="m-btn m-btn--warning2" >m-btn--warning2</span>
<span class="m-btn m-btn--danger2" >m-btn--danger2</span>
````

## size

### span
````html
<span class="m-btn" >default</span>
<span class="m-btn m-btn--1 m-btn--primary" >m-btn--1</span>
<span class="m-btn m-btn--2 m-btn--success" >m-btn--2</span>
<span class="m-btn m-btn--3 m-btn--info" >m-btn--3</span>
<span class="m-btn m-btn--4 m-btn--warning" >m-btn--4</span>
<span class="m-btn m-btn--5 m-btn--danger" >m-btn--5</span>
<span class="m-btn m-btn--6 m-btn--primary" >m-btn--6</span>
<span class="m-btn m-btn--7 m-btn--success" >m-btn--7</span>
<span class="m-btn m-btn--8 m-btn--info" >m-btn--8</span>
<span class="m-btn m-btn--9 m-btn--warning" >m-btn--9</span>
<span class="m-btn m-btn--10 m-btn--danger" >m-btn--10</span>
<span class="m-btn m-btn--11 m-btn--primary" >m-btn--11</span>
<span class="m-btn m-btn--12 m-btn--success" >m-btn--12</span>
<span class="m-btn m-btn--13 m-btn--info" >m-btn--13</span>
<span class="m-btn m-btn--14 m-btn--warning" >m-btn--14</span>
````

### a
````html
<a href="#" class="m-btn" >default</a>
<a href="#" class="m-btn m-btn--1" >m-btn--1</a>
<a href="#" class="m-btn m-btn--2" >m-btn--2</a>
<a href="#" class="m-btn m-btn--3" >m-btn--3</a>
<a href="#" class="m-btn m-btn--4" >m-btn--4</a>
<a href="#" class="m-btn m-btn--5" >m-btn--5</a>
<a href="#" class="m-btn m-btn--6" >m-btn--6</a>
<a href="#" class="m-btn m-btn--7" >m-btn--7</a>
<a href="#" class="m-btn m-btn--8" >m-btn--8</a>
<a href="#" class="m-btn m-btn--9" >m-btn--9</a>
<a href="#" class="m-btn m-btn--10" >m-btn--10</a>
<a href="#" class="m-btn m-btn--11" >m-btn--11</a>
<a href="#" class="m-btn m-btn--12" >m-btn--12</a>
<a href="#" class="m-btn m-btn--13" >m-btn--13</a>
<a href="#" class="m-btn m-btn--14" >m-btn--14</a>
````
### button
````html
<button type="button" class="m-btn" >default</button>
<button type="button" class="m-btn m-btn--1" >m-btn--1</button>
<button type="button" class="m-btn m-btn--2" >m-btn--2</button>
<button type="button" class="m-btn m-btn--3" >m-btn--3</button>
<button type="button" class="m-btn m-btn--4" >m-btn--4</button>
<button type="button" class="m-btn m-btn--5" >m-btn--5</button>
<button type="button" class="m-btn m-btn--6" >m-btn--6</button>
<button type="button" class="m-btn m-btn--7" >m-btn--7</button>
<button type="button" class="m-btn m-btn--8" >m-btn--8</button>
<button type="button" class="m-btn m-btn--9" >m-btn--9</button>
<button type="button" class="m-btn m-btn--10" >m-btn--10</button>
<button type="button" class="m-btn m-btn--11" >m-btn--11</button>
<button type="button" class="m-btn m-btn--12" >m-btn--12</button>
<button type="button" class="m-btn m-btn--13" >m-btn--13</button>
<button type="button" class="m-btn m-btn--14" >m-btn--14</button>
````

### icon

> .m-btn-icon 默认是第一个子元素

````html
<span class="m-btn m-btn--7"><span class="m-btn-icon">&hearts;</span>default</span>
<span class="m-btn m-btn--7 m-btn--info"><span class="m-btn-icon">&hearts;</span>default</span>
````
> 如果 .m-btn-icon 是最后一个子元素应该加上 m-btn-icon--before

````html
<span class="m-btn m-btn--7">before<span class="m-btn-icon m-btn-icon--before">×</span></span>
<span class="m-btn m-btn--7 m-btn--danger">before<span class="m-btn-icon m-btn-icon--before">×</span></span>
````

### loading

````html
<span class="m-btn m-btn--loading m-btn--1 m-btn--primary" >m-btn--1</span>
<span class="m-btn m-btn--loading m-btn--2 m-btn--success" >m-btn--2</span>
<span class="m-btn m-btn--loading m-btn--3 m-btn--info" >m-btn--3</span>
<span class="m-btn m-btn--loading m-btn--4 m-btn--warning" >m-btn--4</span>
<span class="m-btn m-btn--loading m-btn--5 m-btn--danger" >m-btn--5</span>
<span class="m-btn m-btn--loading m-btn--6 m-btn--primary2" >m-btn--6</span>
<span class="m-btn m-btn--loading m-btn--7 m-btn--success2" >m-btn--7</span>
<span class="m-btn m-btn--loading m-btn--8 m-btn--info2" >m-btn--8</span>
<span class="m-btn m-btn--loading m-btn--9 m-btn--warning2" >m-btn--9</span>
<span class="m-btn m-btn--loading m-btn--10 m-btn--danger2" >m-btn--10</span>
<span class="m-btn m-btn--loading m-btn--11 m-btn--primary" >m-btn--11</span>
<span class="m-btn m-btn--loading m-btn--12 m-btn--success" >m-btn--12</span>
<span class="m-btn m-btn--loading m-btn--13 m-btn--info" >m-btn--13</span>
<span class="m-btn m-btn--loading m-btn--14 m-btn--warning" >m-btn--14</span>
````
