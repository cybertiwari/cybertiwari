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
            MySql::class
        ];
    }
    public function getFutureGoal(): string
    {
        return 'Convert idea into startup.';
    }
}
```
