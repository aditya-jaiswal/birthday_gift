(this.webpackJsonpbirthday_gift=this.webpackJsonpbirthday_gift||[]).push([[0],{26:function(e,a,t){e.exports=t(79)},31:function(e,a,t){},32:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(22),i=t.n(r),c=(t(31),t(4)),s=t(5),m=t(7),o=t(6),d=(t(32),t(23)),h=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)this.props.data.project,this.props.data.github,this.props.data.address.city,this.props.data.social.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("header",{id:"home"},n.a.createElement(d.a,{type:"polygon",num:12,bg:!0}),n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#wish"},"Wish")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#story"},"Story")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#gallery"},"Gallery")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#gift"},"Gift")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"Happy Birthday Doll"),n.a.createElement("h3",{className:"responsive-headline"},"This is a random text to test the fonts and styles and color. might have to change it later","."),n.a.createElement("img",{style:{maxWidth:"20%"},src:"images/cake.svg"}))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#wish"},n.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(l.Component),u=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},n.a.createElement("li",{key:"facebook"},n.a.createElement("a",{href:"https://www.facebook.com/iamadityajaiswal/"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",{key:"linkedin"},n.a.createElement("a",{href:"https://www.linkedin.com/in/aditya--jaiswal"},n.a.createElement("i",{className:"fa fa-linkedin"}))),n.a.createElement("li",{key:"instagram"},n.a.createElement("a",{href:"https://www.instagram.com/adit_jaiswal/"},n.a.createElement("i",{className:"fa fa-instagram"}))),n.a.createElement("li",{key:"github"},n.a.createElement("a",{href:"https://github.com/aditya-jaiswal"},n.a.createElement("i",{className:"fa fa-github"})))),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"\xa9 Copyright 2020 Aditya Jaiswal"),n.a.createElement("li",null,"Design by Aditya"))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(l.Component),E=t(24),v=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e="images/wordcloud-124.png";if(this.props.data){this.props.data.name,e="images/"+this.props.data.image;var a=this.props.data.bio;this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload}return n.a.createElement("section",{id:"wish"},n.a.createElement("div",{className:"wordwish"},n.a.createElement("div",{className:"wish-text column"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,a," hahahah again sample text to test. and i will be testing hpw it looks when the test size become hhuge and needs to be accomodated in more than a single line."," ")),n.a.createElement("div",{className:"wish-photo column"},n.a.createElement("img",{style:{maxHeight:"90vh",width:"100%"},src:"images/ayu1.jpg",alt:"ayu1"}))),n.a.createElement("div",{className:"banner"},n.a.createElement(E.GlassMagnifier,{className:"banner-photo column",imageSrc:e,imageAlt:"myushi_wordcloud",allowOverflow:!0,magnifierSize:"50%",magnifierBorderSize:5,magnifierBorderColor:"rgba(255, 255, 255, .5)"}),n.a.createElement("div",{className:"banner-wish column main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,a," hahahah again sample text to test. and i will be testing hpw it looks when the test size become hhuge and needs to be accomodated in more than a single line."," "),n.a.createElement("div",{className:"download"},n.a.createElement("p",null,n.a.createElement("a",{href:e,className:"button",download:"myushi_wordcloud.png"},n.a.createElement("i",{className:"fa fa-download"})," Download Wordcloud"))))))}}]),t}(l.Component),p=t(12),g=(t(65),t(14)),f=t.n(g),y=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;Object(c.a)(this,t),l=a.call(this,e);var n=new Date("1998-08-18,00:00:00"),r=f()(n);l.startTime=r;var i=f()().diff(r),s=f.a.duration(i);return l.state={year:s.years(),month:s.months(),days:s.days(),hours:s.hours(),minutes:s.minutes(),seconds:s.seconds()},l}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var e=f()().diff(this.startTime),a=f.a.duration(e);this.setState({year:a.years(),month:a.months(),days:a.days(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds()})}},{key:"render",value:function(){return n.a.createElement("section",{id:"story"},n.a.createElement("div",{className:"row storyline"},n.a.createElement(p.VerticalTimeline,null,n.a.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"rgb(33, 150, 243)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:n.a.createElement("p",{style:{fontSize:"25px"}},"2011 - present"),iconStyle:{background:"rgb(33, 150, 243)",size:"30px",color:"#fff"},icon:n.a.createElement("i",{className:"fa fa-download"})},n.a.createElement("img",{src:"images/ayu2.jpg"}),n.a.createElement("h3",{className:"vertical-timeline-element-title"},"Creative Director"),n.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Miami, FL"),n.a.createElement("p",null,"Creative Direction, User Experience, Visual Design, Project Management, Team Leading")),n.a.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2010 - 2011",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"Art Director"),n.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"San Francisco, CA"),n.a.createElement("p",null,"Creative Direction, User Experience, Visual Design, SEO, Online Marketing")),n.a.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2008 - 2010",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"Web Designer"),n.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Los Angeles, CA"),n.a.createElement("p",null,"User Experience, Visual Design")),n.a.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2006 - 2008",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"Web Designer"),n.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"San Francisco, CA"),n.a.createElement("p",null,"User Experience, Visual Design")),n.a.createElement(p.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"April 2013",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"}},n.a.createElement("h3",{className:"vertical-timeline-element-title"},"Content Marketing for Web, Mobile and Social Media"),n.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Online Course"),n.a.createElement("p",null,"Strategy, Social Media")))),n.a.createElement("div",{className:"counter"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"years"},n.a.createElement("img",{src:"images/counter-love.png"}),n.a.createElement("h1",null,this.state.year),n.a.createElement("h3",null,"Years")),n.a.createElement("div",{id:"months"},n.a.createElement("img",{src:"images/counter-love2.png"}),n.a.createElement("h1",null,this.state.month),n.a.createElement("h3",null,"Months")),n.a.createElement("div",{id:"days"},n.a.createElement("img",{src:"images/counter-love.png"}),n.a.createElement("h1",null,this.state.days),n.a.createElement("h3",null,"Days")),n.a.createElement("div",{id:"hours"},n.a.createElement("img",{src:"images/counter-love2.png"}),n.a.createElement("h1",null,this.state.hours),n.a.createElement("h3",null,"Hours")),n.a.createElement("div",{id:"minutes"},n.a.createElement("img",{src:"images/counter-love.png"}),n.a.createElement("h1",null,this.state.minutes),n.a.createElement("h3",null,"Minutes")),n.a.createElement("div",{id:"seconds"},n.a.createElement("img",{src:"images/counter-love2.png"}),n.a.createElement("h1",null,this.state.seconds),n.a.createElement("h3",null,"Seconds")))))}}]),t}(l.Component),N=t(25),b=t.n(N),w=(t(73),t(74),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).images=[{original:"images/ayu1.jpg",originalAlt:"Ayushi",thumbnail:"images/ayu1.jpg"},{original:"images/ayu2.jpg",originalAlt:"Ayushi",thumbnail:"images/ayu2.jpg"}],l}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{id:"gallery"},n.a.createElement("div",{className:" media"},n.a.createElement(b.a,{items:this.images,autoPlay:!0,showBullets:!0,showPlayButton:!1,showFullscreenButton:!1,thumbnailPosition:"left",slideOnThumbnailOver:!0,additionalClass:"app-image-gallery"})))}}]),t}(l.Component)),k=t(8),O=t.n(k),j=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{id:"gift"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"gridcontainer"},n.a.createElement("div",{className:"gridItem"},n.a.createElement(O.a,{flipOnHover:!0,flipOnClick:!1,style:{width:"100%"}},n.a.createElement(k.FrontSide,{animationDuration:"900",className:"voucher"},n.a.createElement("div",{className:"voucherLeft"},n.a.createElement("h2",null,"Happy Birthday Ayushi!")),n.a.createElement("div",{className:"voucherRight"},n.a.createElement("h3",null,"Happy Birthday"),n.a.createElement("div",{className:"code"},n.a.createElement("div",{className:"codeheader"},"Voucher Code"),n.a.createElement("div",{className:"spcode"},"MOMODOLL")),n.a.createElement("div",{className:"codeps"},"Please flip over to download the voucher"))),n.a.createElement(k.BackSide,{animationDuration:"900",className:"voucher"},n.a.createElement("div",{className:"backvoucherLeft"},n.a.createElement("a",{href:"images/v_momodoll.png",className:"button download",download:"momodoll.png"},n.a.createElement("i",{className:"fa fa-download"}))),n.a.createElement("div",{className:"backvoucherRight"})))),n.a.createElement("div",{className:"gridItem"},n.a.createElement(O.a,{flipOnHover:!0,flipOnClick:!1,style:{width:"100%"}},n.a.createElement(k.FrontSide,{animationDuration:"900",className:"voucher"},n.a.createElement("div",{className:"voucherLeft"},n.a.createElement("h2",null,"Happy Birthday Ayushi!")),n.a.createElement("div",{className:"voucherRight"},n.a.createElement("h3",null,"Happy Birthday"),n.a.createElement("div",{className:"code"},n.a.createElement("div",{className:"codeheader"},"Voucher Code"),n.a.createElement("div",{className:"spcode"},"MOMODOLL")),n.a.createElement("div",{className:"codeps"},"Please flip over to download the voucher"))),n.a.createElement(k.BackSide,{animationDuration:"900",className:"voucher"},n.a.createElement("div",{className:"backvoucherLeft"}),n.a.createElement("div",{className:"backvoucherRight"})))),n.a.createElement("div",{className:"gridItem"},n.a.createElement(O.a,{flipOnHover:!0,flipOnClick:!1,style:{width:"100%"}},n.a.createElement(k.FrontSide,{animationDuration:"900",className:"voucher"},n.a.createElement("div",{className:"voucherLeft"},n.a.createElement("h2",null,"Happy Birthday Ayushi!")),n.a.createElement("div",{className:"voucherRight"},n.a.createElement("h3",null,"Happy Birthday"),n.a.createElement("div",{className:"code"},n.a.createElement("div",{className:"codeheader"},"Voucher Code"),n.a.createElement("div",{className:"spcode"},"MOMODOLL")),n.a.createElement("div",{className:"codeps"},"Please flip over to download the voucher"))),n.a.createElement(k.BackSide,{animationDuration:"900",className:"voucher"},n.a.createElement("div",{className:"backvoucherLeft"}),n.a.createElement("div",{className:"backvoucherRight"})))),n.a.createElement("div",{className:"gridItem"},n.a.createElement(O.a,{flipOnHover:!0,flipOnClick:!1,style:{width:"100%"}},n.a.createElement(k.FrontSide,{animationDuration:"900",className:"voucher"},n.a.createElement("div",{className:"voucherLeft"},n.a.createElement("h2",null,"Happy Birthday Ayushi!")),n.a.createElement("div",{className:"voucherRight"},n.a.createElement("h3",null,"Happy Birthday"),n.a.createElement("div",{className:"code"},n.a.createElement("div",{className:"codeheader"},"Voucher Code"),n.a.createElement("div",{className:"spcode"},"MOMODOLL")),n.a.createElement("div",{className:"codeps"},"Please flip over to download the voucher"))),n.a.createElement(k.BackSide,{animationDuration:"900",className:"voucher"},n.a.createElement("div",{className:"backvoucherLeft"}),n.a.createElement("div",{className:"backvoucherRight"})))))))}}]),t}(l.Component),D=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).state={foo:"bar",resumeData:{}},l}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null)," ",n.a.createElement(v,null),n.a.createElement(y,null),n.a.createElement(w,null),n.a.createElement(j,null),n.a.createElement(u,null))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.461d0400.chunk.js.map