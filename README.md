# Image Search Abstraction Layer

>User stories:
>- According to the specified string description, obtain a set of picture addresses and text descriptions and page addresses that fit the description.
>- You can add a parameter `?offset=2` to the address to page the returned result.
>- You can get a list of search statements and return page addresses from recent searches.

### Example query usage:

[https://im-img-search.glitch.me/api/imagesearch/lolcats%20funny?offset=10](https://im-img-search.glitch.me/api/imagesearch/lolcats%20funny?offset=10)

### Example query output:

	[
		{
			url: "http://i0.kym-cdn.com/photos/images/original/000/010/017/lolcats-funny-pictures-surprise-cannibalism.jpg",
			snippet: "Image - 10017] | LOLcats | Know Your Meme",
			thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBpDueya0bfWRnj-q0FfTmx01gdr1kCCSlfZ3brV8-oiVQKjZ1YwKb6c",
			context: "http://knowyourmeme.com/photos/10017-lolcats"
		}
	]

### Show latest searches

[https://im-img-search.glitch.me/api/latest/imagesearch/](https://im-img-search.glitch.me/api/latest/imagesearch/)
