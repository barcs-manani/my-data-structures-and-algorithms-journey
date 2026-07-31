#include <vector>
#include <unordered_set> // Very fast lookup table

bool HasPairWithSum(const vector<int>& data, int sum) {
    unordered_set<int> comp; // complements
    for (int value : data) {
        // Have we already seen the number we need
        if (comp.find(value) != comp.end()) {
            return true;
        }
        // Otherwise, remember what number would complete the pair
        comp.insert(sum - value);
    }
    return false;
}

int sum = 9;
vector<int> data = {2, 7, 11, 15}
// Are there 2 numbers whose sum is 9
// if value is not found in comp.find(value), comp.end() is returned