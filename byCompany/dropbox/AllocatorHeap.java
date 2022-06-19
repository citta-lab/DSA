import java.util.BitSet;

public class AllocatorHeap{
    private final int MAX_ID;
    private BitSet bitSet;

    public AllocatorHeap(int maxId) {
        this.MAX_ID = maxId;
        this.bitSet = new BitSet(maxId*2-1);
    }

    public int allocate() {
        int index=0;
        while(index<MAX_ID-1) {
            if(!bitSet.get(index*2+1)) {
                index = index*2+1;
            } else if(!bitSet.get(index*2+2)) {
                index = index*2+2;
            } else {
                return -1;
            }
        }

        bitSet.set(index);
        updateTree(index);
        
        return index-MAX_ID+1;
    }

    public void updateTree(int index) {
        while(index>0) {
            int parent = (index-1)/2;
            if(index%2==1) { //left child
                if(bitSet.get(index) && bitSet.get(index+1)) {
                    bitSet.set(parent);
                } else {
                    bitSet.clear(parent); //it is required for release id
                }
            } else {
                if(bitSet.get(index) && bitSet.get(index-1)) {
                    bitSet.set(parent);
                } else {
                    bitSet.clear(parent);
                }
            }
            index = parent;
        }
    }

    public void release(int id) {
        if(id<0 || id>=MAX_ID) return;
        if(bitSet.get(id+MAX_ID-1)) {
            bitSet.clear(id+MAX_ID-1);
            updateTree(id+MAX_ID-1);
        }
    }

    public boolean check(int id) {
        if(id<0 || id>=MAX_ID) return false;
        return !bitSet.get(id+MAX_ID-1);
    }

    public static void main(String[] args) {
        AllocatorHeap allocator = new AllocatorHeap(10);
        int id1 = allocator.allocate();
        int id2 = allocator.allocate();
        int id3 = allocator.allocate();
        System.out.println(id1+", "+id2+", "+id3);

        System.out.println(allocator.check(id1));
        System.out.println(allocator.check(id2));
        System.out.println(allocator.check(id3));
        System.out.println(allocator.check(11));
        System.out.println(allocator.check(-1));

        allocator.release(2);
        System.out.println(allocator.check(id3));

    }
}
