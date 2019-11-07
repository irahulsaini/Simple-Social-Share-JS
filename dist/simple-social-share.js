(function($){
	/**
	 * Plugin: Simple Social Share
	 * Description: A Simple Social Share Plugin for sharing website pages on social networks
	 * Author: Rahul Saini
	 * Github: https://github.com/irahulsaini/simple-social-share
	 * Demo: https://irahulsaini.github.io/simple-social-share
	 */
	$(document).on('click','[data-share]',function(e){
		e.preventDefault();
		var ss_config = {
			width:800,
			height:600
		}
		var title, desc, canonical, image;
		if($(this).attr('data-title') && $(this).attr('data-title').length > 0){
			title = $(this).attr('data-title');
		}else if($('meta[property="og:title"]').attr('content')){
			title = $('meta[property="og:title"]').attr('content');
		}else if(document.title){
			title = document.title;
		}else{
			title = '';
		}
		//get description
		if($(this).attr('data-description') && $(this).attr('data-description').length > 0){
			desc = $(this).attr('data-description');
		}else if($('meta[property="og:description"]').attr('content')){
			desc = $('meta[property="og:description"]').attr('content');
		}else if($('meta[name="description"]').attr('content')){
			desc = $('meta[name="description"]').attr('content');
		}else{
			desc = '';
		}
		//get canonical
		if($(this).attr('data-url') && $(this).attr('data-url').length > 0){
			canonical = $(this).attr('data-url');
		}else if($('meta[property="og:url"]').attr('content')){
			canonical = $('meta[property="og:url"]').attr('content');
		}else if($('link[rel="canonical"]').attr('href')){
			canonical = $('link[rel="canonical"]').attr('href')
		}else{
			canonical = window.location.href;
		}
		//get image
		if($(this).attr('data-image') && $(this).attr('data-image').length > 0){
			image = $(this).attr('data-image');
		}else if($('meta[property="og:image"]').attr('content')){
			image = $('meta[property="og:image"]').attr('content');
		}else{
			image = '';
		}
		var social_share = {
			'url':encodeURIComponent(canonical),
			'title':encodeURIComponent(title),
			'description':encodeURIComponent(desc),
			'image':encodeURIComponent(image)
		}
		switch($(this).attr('data-share')){
			case 'blogger':
				share_url = 'https://www.blogger.com/blog-this.g?n='+social_share.title+'&t='+social_share.description+'&u='+social_share.url;				
			break;
			case 'facebook':
				share_url = 'https://www.facebook.com/sharer/sharer.php?u='+social_share.url;
			break;
			case 'twitter':
				share_url = 'https://twitter.com/intent/tweet?text='+social_share.description+'%0D%0A'+social_share.url;
			break;
			case 'pinterest':
				if(!image)return;
				share_url = 'https://pinterest.com/pin/create/button/?description='+social_share.description+'&media='+social_share.image+'&url='+social_share.url;
			break;
			case 'linkedin':
				share_url = 'https://www.linkedin.com/shareArticle?title='+social_share.title+'&url='+social_share.url;
			break;
			case 'whatsapp':
				share_url = 'https://web.whatsapp.com/send?text='+social_share.title+'%0D%0A'+social_share.url;
			break;
			case 'telegram':
				share_url = 'https://t.me/share/url?url='+social_share.url+'&text='+social_share.title+'&to=';
			break;
			case 'gmail':
				share_url = 'https://mail.google.com/mail/?view=cm&to=&su='+social_share.title+'&body='+social_share.description+'%0D%0A'+social_share.url+'&bcc=&cc=';
			break;
			case 'mail':case'email':
				share_url = 'mailto:?subject='+social_share.title+'&body='+social_share.description+'%0D%0A'+social_share.url;
			break;
			default:
				share_url = '';
		}
		if(!share_url)return;
		if($(this).attr('data-share') == 'mail' || $(this).attr('data-share') == 'email'){
			window.location.href=share_url;
			return;
		}
		var window_width = $(this).attr('data-width')?$(this).attr('data-width'):800;
		var window_height = $(this).attr('data-height')?$(this).attr('data-height'):600;
		window.open(share_url,'_blank',"width="+window_width+",height="+window_height);
	})
})(jQuery);