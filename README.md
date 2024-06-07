<h2> Hi, I'm Sunil Tiwari <img src="https://media.tenor.com/7wA-N7uaDVcAAAAj/zan-rui-zhanrui.gif" width="50"></h2>

<p>
    <em>
        Software Enginner at <a href="https://sunarctechnologies.com">Sunarc Technologies</a>
        <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
    </em>
</p>

[![Twitter: cybertiwari](https://img.shields.io/twitter/follow/cybertiwari?style=social)](https://twitter.com/cybertiwari)
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
            React::class,
            Laravel::class,
            Magento::class,
            AWS::class,
            Python::class
        ];
    }
    public function getFutureGoal(): string
    {
        return 'Convert idea into startup.';
    }
}
```
