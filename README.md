<h2> Hi, I'm Sunil Tiwari</h2>
<img align='right' src="https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif" width="230">
<p>
    <em>
        Software Enginner at <a href="https://sunarctechnologies.com">Sunarc Technologies</a>
        <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
    </em>
</p>

[![Twitter: _suniltiwari](https://img.shields.io/twitter/follow/_suniltiwari?style=social)](https://twitter.com/_suniltiwari)
[![GitHub cybertiwari](https://img.shields.io/github/followers/cybertiwari?label=follow&style=social)](https://github.com/cybertiwari)



```php
<?php
namespace Sunil\Tiwari;
class About extends Me
{
    public function getCurrentWorkplace(): array
    {
        return [
            'workplace' => [
                'company' => 'Sunarc Technologies',
                'position' => 'Software Engineer'         
            ]
        ];
    }
    public function getDailyKnowledge(): array
    {
        return [
            Php::class,
            Javascript::class,
            Laravel::class,
            Magento::class,
            ReactJs::class
            Aws::class,
        ];
    }
    public function getFutureGoal(): string
    {
        return 'Convert idea into startup.';
    }
}
```
