document.getElementById('order-btn').addEventListener('click', function() {
    // Capture form values
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.getElementById('fruits').selectedOptions).map(option => option.value);
    const addOns = Array.from(document.getElementById('addOns').selectedOptions).map(option => option.value);
    const size = document.getElementById('size').value;
    const sweetness = document.getElementById('sweetness').value;

    // Create a Smoothie object
    const smoothie = new Smoothie(base, fruits, addOns, size, sweetness);

    // Output the smoothie description
    document.getElementById('order-summary').innerHTML = smoothie.getDescription();
});

// Smoothie class definition
class Smoothie {
    constructor(base, fruits, addOns, size, sweetness) {
        this.base = base;
        this.fruits = fruits;
        this.addOns = addOns;
        this.size = size;
        this.sweetness = sweetness;
    }

    getDescription() {
        return `Your smoothie with ${this.base}, ${this.fruits.join(', ')}, ${this.addOns.join(', ')} in size ${this.size} with sweetness level ${this.sweetness} is ready!`;
    }
}
