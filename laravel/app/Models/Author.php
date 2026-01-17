<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\{
    BelongsTo,
    HasMany,
    HasManyThrough,
    MorphMany
};


class Author extends Model
{
    // 1. An author has one user
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // 3. An author wrote multiple articles
    public function articles(): HasMany
    {
        return $this->hasMany(Article::class);
    }

    // 7. An author have many comments (polymorphic via articles)
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    // 9. An author has many audiences (hasManyThrough)
    public function audiences(): HasManyThrough
    {
        return $this->hasManyThrough(
            Audience::class,
            Article::class
        );
    }
}
