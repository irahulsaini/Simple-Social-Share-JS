!function(t){t(document).on("click","[data-share]",function(e){e.preventDefault();var a,r,n,i;a=t(this).attr("data-title")&&t(this).attr("data-title").length>0?t(this).attr("data-title"):t('meta[property="og:title"]').attr("content")?t('meta[property="og:title"]').attr("content"):document.title?document.title:"",r=t(this).attr("data-description")&&t(this).attr("data-description").length>0?t(this).attr("data-description"):t('meta[property="og:description"]').attr("content")?t('meta[property="og:description"]').attr("content"):t('meta[name="description"]').attr("content")?t('meta[name="description"]').attr("content"):"",n=t(this).attr("data-url")&&t(this).attr("data-url").length>0?t(this).attr("data-url"):t('meta[property="og:url"]').attr("content")?t('meta[property="og:url"]').attr("content"):t('link[rel="canonical"]').attr("href")?t('link[rel="canonical"]').attr("href"):window.location.href,i=t(this).attr("data-image")&&t(this).attr("data-image").length>0?t(this).attr("data-image"):t('meta[property="og:image"]').attr("content")?t('meta[property="og:image"]').attr("content"):"";var o=encodeURIComponent(n),h=encodeURIComponent(a),s=encodeURIComponent(r),c=encodeURIComponent(i);switch(t(this).attr("data-share")){case"facebook":share_url="https://www.facebook.com/sharer/sharer.php?u="+o;break;case"twitter":share_url="https://twitter.com/intent/tweet?text="+s+"%0A"+o;break;case"pinterest":if(!i)return;share_url="https://pinterest.com/pin/create/button/?description="+s+"&media="+c+"&url="+o;break;case"linkedin":share_url="https://www.linkedin.com/shareArticle?title="+h+"&url="+o;break;case"whatsapp":share_url="https://web.whatsapp.com/send?text="+h+"%0A"+o;break;case"telegram":share_url="https://t.me/share/url?url="+o+"&text="+h+"&to="}if(share_url){var p=t(this).attr("data-width")?t(this).attr("data-width"):800,l=t(this).attr("data-height")?t(this).attr("data-height"):600;window.open(share_url,"_blank","width="+p+",height="+l)}})}(jQuery);