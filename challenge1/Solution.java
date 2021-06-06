package challenge1;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;

public class Solution {
    /*
    Q1 Find all pairs for a given sum

    How the algorithm works (generally):
    Consider an arbitrary pair for testArray that adds up to targetSum. We know that there are two indices
    associated to this pair. The algorithm iterates through testArray and accumulates in prevInts the integers that
    appear in testArray. So, in each loop iteration, prevInts is a set containing all integers that appeared at
    smaller indices in testArray. The algorithm works by printing when we reach the larger of the two indices
    in a pair (call it j for now). We know that testArray[j] + correspondingPairInt = targetSum. We can therefore
    already determine the corresponding integer for a valid pair that adds up to targetSum. So we can find
    if this pair exists in testArray if we simply check if correspondingPairInt is in the prevInts set.

    Algorithm Structure:
    1. Initialize empty prevInts set.
    2. Initialize isHalfPairPrinted as false (whether or not the pair (targetSum/2, targetSum/2) was printed).
    3. Iterate through the indices of testArray (with loop variable i)
        a. Initialize num1 = testArray[i].
        b. Check if prevInts does not contain num1.
            If true,
                Then this is the first occurrence of num1.
                b2. Initialize num2 = targetSum - num1 (notice that num1 + num2 = targetSum).
                b3. Check if prevInts contains num2.
                    If true,
                        Then notice that num1 and num2 are both in testArray and that they sum to
                        targetSum.
                        Print (min(num1, num2), max(num1, num2))
                    Otherwise,
                        Then num1 still might be part of a pair, and i might be the smaller index of such a pair.
                        Or it might not. This is left to future iterations to find the larger index of this pair,
                        if it exists in testArray.
                b4. Add num1 to prevInts.
            Otherwise,
                Then num1 has appeared before in testArray.
                There are two cases: num1 forms the half pair - i.e. (num1, num1) is a pair such that num1 + num1 = targetSum
                Or, num1 does not.

                b1. Check if isHalfPairPrinted is false and num1 + num1 = targetSum
                    If true,
                        Then notice that num1 appears at the current index, and also appears
                        before in the testArray. So num1 appears at least twice and (num1, num1) is a pair
                        that adds up to targetSum.

                        As isHalfPairPrinted is false, then (num1, num1) has not been printed yet.
                        b1a. Print (num1, num1)
                    Otherwise,
                        Then isHalfPairPrinted is true or num1 + num1 != targetSum.

                        If isHalfPairPrinted is true, then we have already printed the pair
                        (num1, num1) so we don't need to print it again.

                        If num1 + num1 != targetSum, then we have already considered num1 in
                        previous iterations. Notice that if a pair was already printed, then both
                        the numbers in the pair must be in prevInts. Either a pair with num1 in it was already
                        printed or no such pair exists (so far by this loop iteration).

                        In either case, we don't need to do anything.
    */
    public static void findPairs(int[] testArray, int targetSum){
        System.out.println("Finding Pairs...");
        Set<Integer> prevInts = new HashSet<>();
        boolean isHalfPairPrinted = false;

        // Iterate through the indices of testArray
        for (int i = 0; i < testArray.length; i++){
            int num1 = testArray[i];

            if(!prevInts.contains(num1)){
                // Note that num1 + num2 = targetSum
                int num2 = targetSum - num1;

                if (prevInts.contains(num2)){
                    // Print the pair out in the format:
                    // (smaller integer, larger integer)
                    int smaller = Math.min(num1, num2);
                    int bigger = Math.max(num1, num2);

                    System.out.printf("(%d, %d)\n", smaller, bigger);
                }

                // Accumulate num1 to prevInts
                prevInts.add(num1);
            }else if(!isHalfPairPrinted && num1 + num1 == targetSum){
                // Then print the half pair
                isHalfPairPrinted = true;
                System.out.printf("(%d, %d)\n", num1, num1);
            }
        }
    }

    /*
    This is a helper function for the reconcileHelper method.
    (see the document comment below for details on what this
    function does).

    Algorithm Structure:
    1. Initialize an empty toReturn set of integers.
    2. Loop through the set a (with loop variable x).
        a. Check if x is not in set b.
            If true,
                Then add x to toReturn.
    3. Return toReturn.
     */
    /**
     * Return the set difference a - b.
     * This is a helper function for the reconcileHelper method.
     *
     * @param a Some set.
     * @param b Some set.
     *
     * @return The set difference a - b. I.e. the set of all elements
     * in a that are not in b.
     */
    static <T> Set<T> setDifference(Set<T> a, Set<T> b){
        Set<T> toReturn = new HashSet<T>();

        for (T x : a){
            if(!b.contains(x)){
                toReturn.add(x);
            }
        }

        return toReturn;
    }

    /*
    Q2 Reconcile Arrays

    How the algorithm works (generally):
    Create two sets setA and setB containing the integers stored in a and b respectively.
    Then the set difference of setA - setB and setB - setA are by definition
    the numbers in a that aren't in b and the numbers in b that aren't in a.

    Algorithm Structure:
    1. Initialize setA as a set of the string representations of integers in array a.
    2. Initialize setB as a set of the string representations of integers in array b.
       Note: the conversion to string representations are to make printing
       the numbers later easier.
    3. Initialize aMinusB as the set of elements in setA that are not in setB
       (using the setDifference helper function)
    4. Initialize bMinusA as the set of elements in setB that are not in setA.
       (using the setDifference helper function)
    5. Print the elements of aMinusB and bMinusA.
     */
    public static void reconcileHelper(int[] a, int[] b){
        Set<String> setA = new HashSet<>();
        Set<String> setB = new HashSet<>();

        // Add all the integers in a and b into setA and setB respectively
        for (int num : a){setA.add(String.valueOf(num));}
        for (int num : b){setB.add(String.valueOf(num));}

        Set<String> aMinusB = setDifference(setA, setB);
        Set<String> bMinusA = setDifference(setB, setA);

        // Print out the set differences
        System.out.println("Numbers in array a that aren't in array b");
        System.out.print(String.join(" ", aMinusB) + "\n\n");
        System.out.println("Numbers in array b that aren't in array a");
        System.out.print(String.join(" ", bMinusA) + "\n");
    }
}
