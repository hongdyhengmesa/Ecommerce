<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{
    BelongsTo,
    MorphTo
};

class Comment extends Model
{
    // Polymorphic target (Article OR Audience OR Author)
    public function commentable(): MorphTo
    {
        return $this->morphTo();
    }

    // 8. A user wrote many comments
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
